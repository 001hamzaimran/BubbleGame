let hit = document.getElementById("hit");
let clutter = ``;
let bubblebox = document.querySelector(".gamebtm");
let score = 0
function randomHit() {
    hit.innerText = Number(Math.round(Math.random() * 20));

}

function timeInterval() {
    let display = document.getElementById("time");
    let time = 20;
    let intervalId = setInterval(() => {
        display.innerText = time;
        if (time > 0) {
            time--;
        } else {
            clearInterval(intervalId); // Stop the interval
            console.log("Game over!");
            document.querySelector(".gamebtm").innerHTML = `<div id-"GameOver"><h1>Game Over</h1><h3>Your Score is ${score}</h3></div>`
        }
        
    }, 1000)

}

function bubbleGenerator() {
    for (let i = 1; i < 183; i++) {
        clutter += `<div class="bubble">${Math.round(Math.random() * 20)}</div>`
    }
    bubblebox.innerHTML = clutter
    clutter = ``
}

function Checker() {
    bubblebox.addEventListener("click", (e) => {
        let clicked = e.target.innerText
        if (clicked === hit.innerHTML) {
            score +=10;
            document.querySelector("#score").innerHTML = score
        console.log(score);
        randomHit();
        bubbleGenerator();


        
       }
    })
}

randomHit()
Checker()
timeInterval()  
bubbleGenerator()