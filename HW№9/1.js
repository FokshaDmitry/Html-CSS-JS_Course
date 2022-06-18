"use strict";

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var brush = document.getElementById("Brush")
var clear = document.getElementById("Clear")
var color = document.getElementById("Color")
canvas.height = 650;
canvas.widht = 750;
let b = false

canvas.addEventListener("mousemove", (e) => 
{
    if(b)
    {
        ctx.strokeStyle = color.value
        ctx.lineWidth = brush.value / 10;
        ctx.lineTo(e.offsetX / 2.5, e.offsetY)
        ctx.stroke()
    }
})
canvas.addEventListener("mouseup", () => 
{

    b = false;
    ctx.closePath();


})
canvas.addEventListener("mousedown", () => 
{
    ctx.beginPath();
    b = true;
})
clear.addEventListener("click", () =>
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})