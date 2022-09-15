const keys = Array.from(document.querySelectorAll(".key"))

keys.forEach((key)=>{
    key.addEventListener("transitionend", (e)=>{
        if(e.propertyName!=="transform")
            return;
        e.target.classList.remove("transform");
    })
})

window.addEventListener("keydown", (e)=>{
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`div[data-key=${e.key}]`);

    key.classList.add("transform");
    audio.currentTime = 0;
    audio.play()
    console.log(audio);
    console.log(key);
})
