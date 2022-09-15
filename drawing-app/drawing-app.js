const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const sizePlusEl = document.querySelector(".sizePlus")
const sizeMinusEl = document.querySelector(".sizeMinus")
const sizeEl = document.querySelector(".sizeval")
const colorEl = document.getElementById("color")
const clearEl = document.querySelector(".clear")

let x = 0;
let y = 0;
let size = 5;
let color = colorEl.value
let isMouseDown = false;

sizePlusEl.addEventListener("click", (e)=>{
    size += 5
    sizeEl.innerText = size
})

sizeMinusEl.addEventListener("click", (e)=>{
    size-=5
    sizeEl.innerText = size
    
})

colorEl.addEventListener("input", (e)=>{
    color = e.target.value
})

canvas.addEventListener("mousedown", (e)=>{
    x = e.offsetX
    y = e.offsetY
    isMouseDown = true;

})

canvas.addEventListener("mousemove", (e)=>{
    if(isMouseDown){
        x2 = e.offsetX
        y2 = e.offsetY
        drawCircle(x2, y2);
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
})

canvas.addEventListener("mouseup", ()=>{
    isMouseDown = false
    x = undefined
    y = undefined
})


clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x,y,x2,y2){
    ctx.moveTo(x,y)
    ctx.lineTo(x2,y2)
    ctx.lineWidth = size
    ctx.strokeStyle = color
    ctx.stroke()
}