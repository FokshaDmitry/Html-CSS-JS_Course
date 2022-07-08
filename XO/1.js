"use strict";

let mass = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let massplayer = []
let massbot = []

//0|1|2
//3|4|5
//6|7|8
let id = setInterval(() => 
{
    if(
    massbot.includes(0) && massbot.includes(1) && massbot.includes(2) || 
    massbot.includes(0) && massbot.includes(3) && massbot.includes(6) ||
    massbot.includes(0) && massbot.includes(4) && massbot.includes(8) ||
    massbot.includes(1) && massbot.includes(4) && massbot.includes(7) ||
    massbot.includes(2) && massbot.includes(5) && massbot.includes(8) ||
    massbot.includes(2) && massbot.includes(4) && massbot.includes(6) ||
    massbot.includes(3) && massbot.includes(4) && massbot.includes(5) ||
    massbot.includes(6) && massbot.includes(7) && massbot.includes(8)){
        alert("Bot win")
        clearInterval(id);
        location.reload();
        return;
    }

    if(
        massplayer.includes(0) && massplayer.includes(1) && massplayer.includes(2) || 
        massplayer.includes(0) && massplayer.includes(3) && massplayer.includes(6) ||
        massplayer.includes(0) && massplayer.includes(4) && massplayer.includes(8) ||
        massplayer.includes(1) && massplayer.includes(4) && massplayer.includes(7) ||
        massplayer.includes(2) && massplayer.includes(5) && massplayer.includes(8) ||
        massplayer.includes(2) && massplayer.includes(4) && massplayer.includes(6) ||
        massplayer.includes(3) && massplayer.includes(4) && massplayer.includes(5) ||
        massplayer.includes(6) && massplayer.includes(7) && massplayer.includes(8)){
            alert("You win")
            clearInterval(id);
            location.reload();
            return;
        }
        let summ = 0;
        mass.forEach(element => {
           summ += element 
        });
    if(summ === 81)
    {            
        alert("Draw")
        clearInterval(id);
        location.reload();
        return;
    }
}, 1000)

function randbot()
{
    let b = true;
    do {
    let summ = 0;
    let n = Math.floor(Math.random() * 8)
        mass.forEach(element => {
            summ += element
            if (element === n) {
                b = false;
                $(`#td${n}`).text("O")
                massbot += n;
                mass[n] = 9;
            }
            else if(summ === 81)
            {
                b = false
            }
        });
    } while (b);
}

$("#td0").on("click", () =>
{
    if(mass[0] !== 9)
    {
        mass[0] = 9;
        massplayer += 0;
        $("#td0").text("X")
        randbot();
    }
})
$("#td1").on("click", () =>
{
    if(mass[1] !== 9)
    {
        mass[1] = 9;
        massplayer += 1;
        $("#td1").text("X")
        randbot();
    }
})
$("#td2").on("click", () =>
{
    if(mass[2] !== 9)
    {
        mass[2] = 9;
        massplayer += 2;
        $("#td2").text("X")
        randbot();
    }
})
$("#td3").on("click", () =>
{
    if(mass[3] !== 9)
    {
        mass[3] = 9;
        massplayer += 3;
        $("#td3").text("X")
        randbot();
    }
})
$("#td4").on("click", () =>
{
    if(mass[4] !== 9)
    {
        mass[4] = 9;
        massplayer += 4;
        $("#td4").text("X")
        randbot();
    }
})
$("#td5").on("click", () =>
{
    if(mass[5] !== 9)
    {
        mass[5] = 9;
        massplayer += 5;
        $("#td5").text("X")
        randbot();
    }
})
$("#td6").on("click", () =>
{
    if(mass[6] !== 9)
    {
        mass[6] = 9;
        massplayer += 6;
        $("#td6").text("X")
        randbot();
    }
})
$("#td7").on("click", () =>
{
    if(mass[7] !== 9)
    {
        mass[7] = 9;
        massplayer += 7;
        $("#td7").text("X")
        randbot();
    }
})
$("#td8").on("click", () =>
{
    if(mass[8] !== 9)
    {
        mass[8] = 9;
        massplayer += 8;
        $("#td8").text("X")
        randbot();
    }
})
