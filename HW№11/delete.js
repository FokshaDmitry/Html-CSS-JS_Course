var fs = require('fs');
let num = 0;
let files = [];
fs.readdirSync("verse").forEach((element) =>
{
    if(element.indexOf('.html') === -1)
    {
        files.unshift(element);
    }
})
function call(path, element, callback)
{
    fs.unlink(path, function(err){
        if (err) {
            console.log(err);
            callback();
        } else {             
            console.log(`${element} delete`);
            callback();
        }
    });
    
}
let callbackToken = () =>{
    num++;
    if(num === files.length) console.log('Filse Delete');
}
if(files.length === 0)
{
    console.log('directory is empty');
}
else
{
    files.forEach((element)=> 
    {
        call(`verse\\${element}`, element, callbackToken)
    })
}
