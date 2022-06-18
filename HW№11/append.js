var fs = require('fs');
let num = 0;
let files = [];
fs.readdirSync("verse").forEach((element) =>
{
    if(element.indexOf('.txt') !== -1)
    {
        files.unshift(element);
    }
})

function call(path, element)
{
    return new Promise((resolve, reject) => {
    
        let n = Math.floor(Math.random() * 100);
        fs.appendFile(path, ` ${n}`, function(err){
            if (err) {
                reject(err);
            } else {             
                console.log(`${element} append ${n}`);
                resolve();
            }
        });
    })
    
}

let callbackToken = () =>{
    num++;
    if(num === files.length) console.log('Filse append');
}
if(files.length === 0)
{
    console.log('directory is empty');
}
else
{
    files.forEach((element)=> 
    {
        call(`verse\\${element}`, element).then(callbackToken, err => console.log(err))
    })
}