"use strict";

let banword = ["no", "yes", "negative"]
let mess = document.getElementById("Massege");
$("#FIO").on("change", ()=>
{
    if(/[a-z]+\ [a-z]+\ [a-z]+/i.test($("#FIO").val()))
    {
        $("#Summ").removeAttr("disabled")
    }
})
$("#Summ").on("change", ()=>
{
    
    if(/\d+[,.`']\d+[$€£₴]/.test($("#Summ").val()) || /\d+[$€£₴]/.test($("#Summ").val()))
    {
        $("#Massege").removeAttr("disabled")
    }

})
$("#Massege").on("change", ()=>
{
    banword.forEach(element =>
        {
            var reg = new RegExp(element,"ig");
            mess.value = mess.value.replace(reg, "***")

        })
})