const questions = [
    {
        "question": "What happened at Dunkirk in May 1940?",
        "a":"British forces retreated across the English Channel",
        "b":"The French army lost a major battle",
        "c":"American forces invaded France",
        "d":"German forces were defeated in a large naval battle",
        "ans":"a"
    },
    {
        "question": "What was the code name given to Germany’s plan to invade the USSR?",
        "a":"Operation Sea Lion",
        "b":"Operation Barbarossa",
        "c":"Operation Wolfenstein",
        "d":"Operation Crossbow",
        "ans":"b"
    },
    {
        "question": "Who was the Japanese admiral behind the Pearl Harbor attack?",
        "a":"Hirohito",
        "b":"Myamoto",
        "c":"Yamamoto",
        "d":"Matsuhito",
        "ans":"c"
    },
    {
        "question": "Why did Allied forces invade Italy after it had already surrendered?",
        "a":"German forces were still fighting in the country",
        "b":"Italy refused to meet all of the Allied demands",
        "c":"There was strong anti-Allied resistance among Italian partisans",
        "d":"The Allies felt that Italy needed to be punished",
        "ans":"a"
    },
    {
        "question": "Which Allied country's forces arrived in Berlin first?",
        "a":"The United States",
        "b":"Britain",
        "c":"France",
        "d":"The USSR",
        "ans":"d"
    },
]

const button = document.getElementById("btn")

const quiz = document.getElementById("quiz")

const question = document.getElementById("question")
const optionA = document.getElementById("option-a").nextElementSibling
const optionB = document.getElementById("option-b").nextElementSibling
const optionC= document.getElementById("option-c").nextElementSibling
const optionD = document.getElementById("option-d").nextElementSibling

const answers = document.querySelectorAll(".option")
const options = document.querySelectorAll(".options")

const body = document.getElementsByTagName("body")

options.forEach((opt)=>{
    opt.addEventListener('mouseover', (e)=>{
        opt.style.boxShadow='0 0 0.2rem 0.1rem #4370E7'
        return false
    })
})

options.forEach((opt)=>{
    opt.addEventListener('mouseout', (e)=>{
        opt.style.boxShadow='none'
        return false
    })
})

options.forEach((opt)=>{
    opt.addEventListener('click', (e)=>{
        if(e.target.className==="options"){
            e.target.children[0].checked = true
            return false
        }
    })
})


body[0].addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        button.click()
    }
})


let currQuestion = 0
let score = 0

function loadQuestion(){
    question.innerHTML = questions[currQuestion].question
    optionA.textContent = questions[currQuestion].a
    optionB.textContent = questions[currQuestion].b
    optionC.textContent = questions[currQuestion].c
    optionD.textContent = questions[currQuestion].d
}



button.addEventListener("click", (e)=>{
    let flag = false;
    answers.forEach((answer)=>{
        if(answer.checked){
            flag = true
            if(answer.value===questions[currQuestion]["ans"]){
                score++
            }
            answer.checked=false
        }

    })
    if(flag){
        if(currQuestion<4){
            currQuestion++
            loadQuestion()
        }else{
            quiz.innerHTML = `
                <p class='result'>you scored <span class='score'> ${score}/5 </span>, congrats buddy</p>
                <button onClick='location.reload()' class='btn'>Retry</button>
            `
        }
    }else{
        alert("select atleast one option")
    }
})


//initial-call
loadQuestion()

