const API_URL = 'https://api.github.com/users/'

const form = document.querySelector("form")
const search = document.getElementById("search")
const main = document.querySelector("main")
const profile_div = document.querySelector(".profile")
const repo_box = document.querySelector(".repo-box")
const profile_box = document.querySelector(".flex")

findProfile(API_URL+'vicky1999s')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const value = search.value
    findProfile(API_URL+value)
    search.value=''
})

async function findProfile(url){
    console.log(url)
    try {
        const value = await fetch(url)
        if(!value.ok){
            console.log("not found")
            profile_box.innerHTML = ''
            alert("user not found")
            return;
        }
        showProfile(await value.json())
    } catch (error) {
        console.log(error)
    }
    
}

async function showProfile(profile){
    profile_box.innerHTML = ''
    let repoNames = []
    let repoUrl = []
    const stars = await getStars(profile, repoNames, repoUrl)
    const profileEl = document.createElement("div")
    profileEl.classList.add("profile")
    profileEl.innerHTML = `
            <img src="${profile.avatar_url}" alt="${profile.login}">
            <h3>${profile.name?profile.name:''} <span>(${profile.login})</span></h3>
            <p>${profile.bio?profile.bio:"Github user"}</p>
            <div class="icons">
                <p><span>${profile.following}</span>following</p>
                <p><span>${profile.followers}</span>followers</p>
                <p><span>${stars}</span>stars</p>
            </div>

    `

    const repoEl = document.createElement("div")
    repoEl.classList.add("repo-box")
    repoEl.innerHTML = `
        <p>Repositories</p>
        <div class="repo">
        </div>
    `
    const repo = repoEl.querySelector(".repo")
    for(let i=0;i<repoNames.length;i++){
        const a = document.createElement("a")
        a.target = "_blank"
        a.href = repoUrl[i]
        a.innerText = repoNames[i]
        repo.appendChild(a)
    }
 
    profile_box.appendChild(profileEl)
    profile_box.appendChild(repoEl)

    console.log(profile);
}

async function getStars(profile, repoNames, repoUrl){
    const following = await fetch(profile.repos_url)
    if(!following.ok){
        return 0
    }
    const result = await following.json()
    let count = 0
    result.forEach(repo=>{
        repoNames.push(repo.name)
        repoUrl.push(repo.html_url)
        count += repo.stargazers_count
    })
    return count
}
