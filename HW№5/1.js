"use strict";

let simbol = document.getElementById("Simbol");
let text = document.getElementById("text");
let play = document.getElementById("pt");
let timer = document.getElementById("timer");
let timeValue = document.getElementById("timeValue");
let simbols = document.getElementById("simbolCount")
let simbolCount = 0;
let timeMinut = 0
let p = [];
let pl = false;
let win = 0;
let lose = 0;
let seconds = 0;
let minutes = 0;
for (let index = 65; index < 122; index++) {
    if(index <= 90 || index >= 97)
    {
        p.push(String.fromCharCode(index));
    }
}

function playgame()
{
    if(timeMinut === 0 || simbol.textContent === "")
    {
        simbol.textContent = p[Math.floor(Math.random() * p.length)]
        timeMinut = timeValue.value * 60;
        simbolCount = 0
        win = 0;
        lose = 0;
    }
    if(play.textContent === "play_arrow")
    {         
        play.textContent = "pause"
        pl = true
    }
    else if(play.textContent === "pause")
    {
        play.textContent = "play_arrow"
        pl = false
    }
}
text.onkeydown = (e) =>
{
    if(simbols.value > simbolCount) 
    {
        if(e.key.length === 1)
        {
            if(e.key === simbol.textContent)
            {
                text.value = ""
                simbol.textContent = p[Math.floor(Math.random() * p.length)]
                text.style.border = "black";
                win++;
            }
            else
            {
                text.value = ""
                text.style.border = "2px dashed red";
                lose++;
            }
            simbolCount++
        }
        
    }
    else
    {
        alert(`Символы закончились\nПравильных: ${win}\nОшибок: ${lose}\nВремя прохождкния: ${Math.floor((timeValue.value * 60 - timeMinut) / 60)}:${(timeValue.value * 60 - seconds) % 60}`);
        timeMinut = 0;
        simbol.textContent = "";
        play.textContent = "play_arrow"
        text.value = ""
        timer.textContent = "00:00"
        pl = false
    }
}
setInterval(function () 
{
    if(pl && timeMinut >= 0)
    {
        seconds = timeMinut % 60 
        minutes = timeMinut / 60 %60 
        timer.textContent = `${Math.floor(minutes)}:${seconds}`;
        timeMinut--;
        if (timeMinut === 0) 
        {
            alert(`Время закончилось\nПравильных: ${win}\nОшибок: ${lose}\nВремя прохождения: ${timeValue.value}:00`);
            timeMinut = 0;
            simbol.textContent = "";
            play.textContent = "play_arrow"
            text.value = ""
            timer.textContent = "00:00"
            pl = false
        } 
    }
}, 1000)
play.addEventListener("click", playgame)