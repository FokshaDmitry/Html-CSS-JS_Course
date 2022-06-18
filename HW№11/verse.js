const fs = require("fs");

let str = `Владей собой среди толпы смятенной, Тебя клянущей за смятенье всех, Верь сам в себя, наперекор вселенной, И маловерным отпусти их грех; - В чем смысл твоей жизни? - Меня спросили. -Где видишь ты счастье свое, скажи? - В сраженьях, - ответил я, - против гнили И в схватках, - добавил я, - против лжи!`.replace(/[^a-zа-яё\s]/gi, '')
let num = 0
let strArr = str.split(' ')
strArr.forEach(element => {
    if(element != "")
    {
        fs.writeFileSync(`verse\\${num}.txt`, `${element}`, function(err)
        {
            if (err) {
                console.log(err);
            } 
            else {
                console.log(`${element} created`)}
        })
        num++;
    }
});
console.log("Finish")
