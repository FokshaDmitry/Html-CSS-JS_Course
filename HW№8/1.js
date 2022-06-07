"use strict";

const url = "https://randomuser.me/api/"
const urlcat = "https://catfact.ninja/fact"
const urlactive = "https://www.boredapi.com/api/activity"
let xml = new XMLHttpRequest();


$("#Generate").on("click", ()=>
{
    xml.open("GET", url);
    xml.send();
})

xml.onload = () =>
{
    let user = JSON.parse(xml.response)
    $("#Photo").attr("src", `${user.results[0].picture.large}`);
    $("#Number").val(`${user.results[0].cell}`)
    $("#Name").val(`${user.results[0].name.title}. ${user.results[0].name.first} ${user.results[0].name.last}`)
    $("#Country").val(`${user.results[0].location.country}`)
    $("#City").val(`${user.results[0].location.city}`)
    $("#Email").val(`${user.results[0].email}`)
    localStorage.setItem("randomUser", JSON.stringify(user))
}
$("#GenerateFact").on("click",()=>
{
    fetch(urlcat).then((res) => res.json()).then((result) => $("#Fact").val(`${result.fact}`))
})
$("#GenerateActivity").on("click",()=>
{
    fetch(urlactive).then((res) => res.json()).then((result) => $("#Activity").val(`${result.activity}`))
})