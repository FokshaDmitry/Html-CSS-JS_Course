"use strict";

 let SetMass= new Set(JSON.parse(localStorage.getItem("Colors"))) 
SetMass.forEach((element)=>{
    $("#List").append(`<p class = "cross">${element}<p>`)
})

$("#List p").on("click", (e) => 
{
    $("#StatusText").text("Alredy Available")
    $("#Color").css("background-color",`${e.currentTarget.textContent}`)
    $("#id").text(`${e.currentTarget.textContent}`)
    
})
function check(str)
{
    if(!SetMass.has(str))
    {
        SetMass.add(str)
        localStorage.setItem("Colors", JSON.stringify(Array.from(SetMass)))
        $("#StatusText").text("New")
        $("#List").append(`<p class = "cross">${str}<p>`)
    }
    else
    {
        $("#StatusText").text("Alredy Available")
    }
}
$("#Generate").on("click", () =>
{
    let str = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    $("#Color").css("background-color",`${str}`)
    $("#id").text(`${str}`)
    check(str);
})