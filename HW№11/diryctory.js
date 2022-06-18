let path = process.argv[2];
console.log(path)
var fs = require('fs');
let files = fs.readdirSync(path);
if(files.length === 0)
{
    console.log('directory is empty');
}
else
{
    files.forEach((element)=> 
    {
        console.log(`${element}\n`)
    })
}