"use strict";

let audio = document.createElement("audio")
let file = document.getElementById("AddFile")
let sourse = document.createElement("source")
let play = document.getElementById("play")
let pleyText = document.getElementById("pt")
let valume = document.getElementById("valume")
let time = document.getElementById("Time")
let r10 = document.getElementById("replay")
let f10 = document.getElementById("forward")
let miute = document.getElementById("valume_up")
document.body.append(audio);
time.value = 0;
audio.volume = 0.5;
valume.value = 50;
let s = 0;
let t = 0;
let pl = false;
function playmusic()
{
    var fileName = file.value.split('/').pop().split('\\').pop();
    if(fileName !== "")
    {
        if(pleyText.textContent === "play_arrow")
        {
            
            sourse.src = `D:\\Музыка\\${fileName}`
            audio.append(sourse);
            pleyText.textContent = "pause"
            t =  audio.duration / 100;
            audio.play();
            pl = true
        }
        else if(pleyText.textContent === "pause")
        {
            sourse.src = `D:\\Музыка\\${fileName}`
            audio.append(sourse);
            pleyText.textContent = "play_arrow"
            audio.pause();
            pl = false
        }
    }
    
}
function val()
{
    audio.volume = valume.value / 100;
}

function int()
{

        if(pl)
        {
            t =  audio.duration / 100;
            if(audio.currentTime > s)
            {
                time.value++;
                s += t;
            }
        }

}
function timechenge()
{
    s = 0;
    for (let index = 0; index < Math.floor(time.value); index++) {
        s += t;
    }
    audio.currentTime = s;
}
function miutechange()
{
    if (miute.textContent === "volume_up") 
    {
        audio.muted = true;
        miute.textContent = "volume_mute"
    }
    else if (miute.textContent === "volume_mute") 
    {
        audio.muted = false;
        miute.textContent = "volume_up"
    }
}
setInterval(int, 100)
valume.addEventListener("change", val)
play.addEventListener("click", playmusic)
time.addEventListener("change", timechenge)
miute.addEventListener("click", miutechange)
f10.addEventListener("click", function()
{
    audio.currentTime += 10;
});
r10.addEventListener("click", function()
{
    audio.currentTime -= 10;
    time.value = time.value = time.value - 10 / t > 0 ? time.value = time.value - 10 / t : time.value = 0;
    for (let index = 0; index < Math.floor(10/t); index++) {
        if(s != 0){
            s -= t;
        }
    }
})
