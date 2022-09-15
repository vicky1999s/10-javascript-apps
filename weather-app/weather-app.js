const API_KEY = "3265874a2c77ae4a04bb96236a642d2f";
const form = document.querySelector(".form");
const main = document.querySelector("main");
const input = document.querySelector("input")
const container = document.querySelector(".container")

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
const icon = (id) => `https://openweathermap.org/img/wn/${id}@2x.png`;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWeather(input.value);
})

async function getWeather(location){
    container.innerHTML = '';
    const res = await fetch(url(location));
    if(!res.ok){
        container.innerHTML = `
           <h2>Location Not Found</h2>
        `
        return;
    }
    const data = await res.json();
    container.innerHTML = `
            <h2>${location}</h2>
            <div class="weather">
                <img src="https://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png" alt="img">
                <h2>${data["main"]["temp"]} &#8451</h2>
            </div>
    `
}

getWeather("theni")