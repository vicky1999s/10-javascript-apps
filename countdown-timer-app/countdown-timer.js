const newYear = "1 jan 2023"
const hoursEl = document.getElementById("hours")
const daysEl = document.getElementById("days")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")


function countdown(){
    const newYearDate = new Date(newYear);
    const currDate = new Date();
    const numberOfSeconds = (newYearDate-currDate)/1000

    const days = Math.floor(numberOfSeconds / 3600 / 24)
    const hours = Math.floor(numberOfSeconds / 3600) % 24
    const minutes = Math.floor(numberOfSeconds / 60) % 60
    const seconds = Math.floor(numberOfSeconds % 60)

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)

}

function formatTime(time){
    return time<10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)