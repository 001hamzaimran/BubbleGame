let hit = document.getElementById("hit");
let clutter = ``;
let bubblebox = document.querySelector(".gamebtm");
let score = document.querySelector("#score");
score.innerText = 0;

function randomHit() {
    hit.innerText = Math.round(Math.random() * 10);

}

function timeInterval() {
    let display = document.getElementById("time");
    let time = 2;
    let intervalId = setInterval(() => {
        display.innerText = time;
        if (time > 0) {
            time--;
        } else {
            clearInterval(intervalId); // Stop the interval
            console.log("Game over!");
            clutter.innerHTML = `<h1>GAME END</h1>`;    
            bubblebox.innerText = clutter
        }
        
    }, 1000)

}

function bubbleGenerator() {
    for (let i = 1; i < 183; i++) {
        clutter += `<div class="bubble"><p id=tocheck>${Math.round(Math.random() * 10)}</p></div>`
    }
    bubblebox.innerHTML = clutter
    clutter = ``
}

function Checker() {
    bubblebox.addEventListener("click", (e) => {
        let childNode = e.target.childNodes
        childNode.forEach(element => {
            if (e.target.classList.contains('bubble')) {
                let inner = element.innerText;
                if (inner === hit.innerText) {
                    let currentScore = parseInt(score.innerText, 10);
                    score.innerText = currentScore + 10;
                    console.log("abc");
                bubbleGenerator();
                randomHit()

                }
            }
        });
    })
}

randomHit()
Checker()
timeInterval()  
bubbleGenerator()