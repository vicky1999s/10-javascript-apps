const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280'
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH_API =  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const main = document.getElementById("main")
const form = document.querySelector("form")
const search = document.getElementById("search")
const home = document.querySelector("button")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    getMovies(SEARCH_API+search.value)
    search.value=''
})

home.addEventListener("click", ()=>{
    getMovies(API_URL)
})

async function getMovies(url){
    const result = await fetch(url)
    const result_json = await result.json()
    
    showMovies(result_json)
}

function showMovies(movies){
    main.innerHTML=''
    movies.results.forEach(movie => {
        const {title, vote_average, overview, poster_path} = movie
        const movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")
        movieDiv.innerHTML=
        `
            <img src=${IMAGE_URL + poster_path} alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${showRatings(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>${title}:</h3>
            ${overview}
            </div>
        `
        main.appendChild(movieDiv)
    })
}

function showRatings(rating){
    if(rating>=8){
        return "green"
    }else if(rating>=6.6){
        return "orange"
    }else{
        return "red"
    }
}

getMovies(API_URL)
