"use strict";


// Д.З №1

// // let a;
// // do
// // {
// // 	a = prompt("Write duck");
// // }while(a !== "duck");


// // let num1 = Number(prompt("Write num 1"))
// // let num2 = Number(prompt("Write num 2"))
// // let str;
// // if (num1 < num2){
// // 	for (let i = num1; i <= num2; i++) 
// // 	{
// // 		if(i % 2 === 0)
// // 		{
// // 			str += ` ${i}`
// // 		}
// // 	}
// // }else{
// // 	for (let i = num2; i <= num1; i++) 
// // 	{
// // 		if(i % 2 == 0)
// // 		{
// // 			str += ` ${i}`
// // 		}
// // 	}	
// // }
// // console.log(str);

// // let num1 = Number(prompt("Write num 1"))
// // let num2 = Number(prompt("Write num 2"))
// // let str;
// // if (num1 < num2)
// // {
// // 	for (let i = num1; i <= num2; i++) 
// // 	{
// // 		for(let j = 1; j <= i; j++)
// // 		{
// // 			str += `${i}`
// // 		}
// // 	}
// // }
// // else
// // {
// // 	for (let i = num2; i <= num1; i++) 
// // 	{
// // 		for(let j = 0; j <= i; j++)
// // 		{
// // 			str += `${i}`
// // 		}
// // 	}	
// // }
// // console.log(str);

// // let num1 = Number(prompt("Write num 1"))
// // let num2 = Number(prompt("Write num 2"))
// // let str;
// // let b = true;
// // if (num1 < num2)
// // {
// // 	for (let i = num1; i <= num2; i++) 
// // 	{
// // 		if(b)
// // 		{
// // 			for(let j = 1; j <= i; j++)
// // 			{
// // 				str += `${i}`
// // 			}
// // 			b = false;
// // 		}
// // 		else
// // 		{
// // 			b = true;
// // 		}
		
// // 	}
// // }
// // else
// // {
// // 	for (let i = num2; i <= num1; i++) 
// // 	{
// // 		if(b)
// // 		{
// // 			for(let j = 1; j <= i; j++)
// // 			{
// // 				str += `${i}`
// // 			}
// // 			b = false;
// // 		}
// // 		else
// // 		{
// // 			b = true;
// // 		}
// // 	}	
// // }
// // console.log(str);


// // let str;
// // let num;
// // let arr = [];
// // let tmp;
// // function plusarr(array)
// // {
// // 	let tmp = 0
// // 	for (let n of array)  
// // 	{
// // 		tmp += n;
// // 	}
// // console.log(tmp);
// // }
// // do 
// // {
// // 	tmp = prompt("Write num or Ok")
// // 	str = tmp;
// // 	num = Number(tmp);
// // 	if (str !== "Ok") 
// // 	{
// // 		arr.unshift(num);	
// // 	}
// // } while (str !== "Ok");
// // plusarr(arr);

// // function calc(num1, num2, operator) 
// // {
// // 	let result = 0;
// // 	if(operator === "+")
// // 	{
// // 		result = num1 + num2;
// // 	}
// // 	if(operator === "*")
// // 	{
// // 		result = num1 * num2;
// // 	}
// // 	if(operator === "-")
// // 	{
// // 		if (num1 >= num2) 
// // 		{
// // 			result = num1 - num2;
// // 		}
// // 		else
// // 		{
// // 			result = num2 - num1;
// // 		}
// // 	}
// // 	if (operator === "/") 
// // 	{
// // 		if (num1 >= num2) 
// // 		{
// // 			result = num1 / num2;
// // 		}
// // 		else
// // 		{
// // 			result = num2 - num1;
// // 		}
// // 	}
// // 	console.log(result);
// // }
// // let num1 = Number(prompt("Write num 1"))
// // let num2 = Number(prompt("Write num 2"))
// // let str = prompt("Write operationa (+,-,*,/)")
// // calc(num1, num2, str);


// Д.З №2


// function remove(arr, num) 
// {
// 	arr.space(num, 1);
// }

// let Cat = 
// {
// 	Name: "Bob" ,
// 	Breed: "Cat",
// 	Age: 1,
// 	Hunger: 0,
// 	Mew: function()
// 	{
// 		if(this.Hunger != 3)
// 		{
// 			let a = Math.random() * 4;
// 			a = Math.round(a);
// 			switch(a)
// 			{
// 				case 1: return this.Name + ": Mew";
// 				case 2: return this.Name + ": Mrr";
// 				case 3: return this.Name + ": Hi";
// 				case 4: return this.Name + ": Woof";
// 			}
// 		}
// 		else
// 		{
// 			return this.Name + ": Is died"
// 		}

// 	},
// 	Walk: function()
// 	{
// 		if(this.Hunger != 3)
// 		{
// 			this.Hunger++; 
// 			return this.Name + ": I go walk";
// 		}
// 		else
// 		{
// 			return this.Name + ": Is died"
// 		}
// 	},
// 	Eat: function()
// 	{
// 		if(this.Hunger != 3)
// 		{		
// 			let food = ["Meet", "Fish", "Bread", "Cheeth"]
// 			function feed(arr)
// 			{
// 				let tmp = prompt("Write eat")
// 				arr.forEach(element => {
					
// 				});
// 				this.Hunger = 0; 
// 				return this.Name + ": I'am full";
// 			}
			
// 		}
// 		else
// 		{
// 			return this.Name + ": Is died"
// 		}
// 	}


// }
// console.log(Cat.Walk());
// console.log(Cat.Eat());
// console.log(Cat.Walk());
// console.log(Cat.Mew());
// console.log(Cat.Mew());
// console.log(Cat.Mew());
// console.log(Cat.Mew());

// Д.З №3


let div = document.createElement("div");
let img = document.createElement("img")
let Eat = document.createElement("input")
let Hunger = document.createElement("progress")
let ul = document.createElement("ul");
let li1 = document.createElement("li")
let li2 = document.createElement("li")
li1.textContent = "Pause"
li2.textContent = "Continue"
ul.style.width = "80px"
ul.style.display = "none"
ul.style.position = "absolute"
ul.style.cursor = "pointer"
ul.style.border = "1px solid #000000"
Hunger.max = "100";
Hunger.style.width = "500px"
Hunger.style.height = "20px"
Eat.type = "button"
Eat.style.height = "30px"
Eat.style.width = "60px"
Eat.style.right = "100px"
Eat.value = "Eat"
img.src = "img\\happy-cat-26.gif"
div.style.position = "absolute"
div.style.top = "20%";
div.style.width = "500px"
div.style.height = "500px"
div.style.textAlign = "center"
div.style.justifyContent = "center"
document.body.style.textAlign = "center"
document.body.style.justifyContent = "center"
document.body.style.display = "flex"
ul.append(li1);
ul.append(li2);
div.append(Hunger)
div.append(img)
div.append(Eat)
document.body.append(ul);
document.body.append(div);
let h = 0
let e = false;
let hun = true
function hunger()
{
    if(hun)
    {
        if(h === 0)
        {
            img.src = "img\\happy-cat-26.gif"
        }
        if(h === 25)
        {
            img.src = "img\\8VtT.gif"
        }
        if(h === 50)
        {
            img.src = "img\\FPdQ.gif"
        }
        if(h == 100)
        {
            clearInterval(id);
            Eat.disabled = "true"
            img.src = "img\\image_562306121202561790596 (1).gif"
        }
        h += 1;
        Hunger.value = `${h}`
    }
    
}
function neweat()
{
    hun = false;
    let a = Math.random() * 4;
    a = Math.round(a);
    switch (a) 
    {
        case 1:
                img.src = "img\\SKbS.gif"
            break;
        case 2:
                img.src = "img\\2oez.gif"
            break;
        case 3:
                img.src = "img\\7yEH.gif"
            break;
        case 4:
                img.src = "img\QIgu.gif"

            break;  
    }
    e = true
}
function eat()
{
    if (e) 
    {
        h -=1;
        Hunger.value = `${h}`
        if(h === 0)
        {
            img.src = "img\\8VtT.gif"
            e = false;
            hun = true;
        }
    }

}
function pause()
{
    Eat.disabled = "true"
    img.src = "img\\image_562306121202561790596 (1).gif"
    hun = false;
}
function continu()
{
    Eat.removeAttribute("disabled")
    img.src = "img\\happy-cat-26.gif"
    hun = true;
}
Eat.addEventListener("click", neweat);
setInterval(eat, 300);
let id = setInterval(hunger, 1000);
document.addEventListener("contextmenu", function(e) {
    var ev = window.event || e;
    var x = ev.pageX;
    var y = ev.pageY;
    ul.style.left = x + 'px';
    ul.style.top = y + 'px';
    ul.style.display = 'block';
    ev.preventDefault();
})
li1.addEventListener("click", pause)
li2.addEventListener("click", continu)
document.addEventListener("click", function() {
    ul.style.display = 'none';
})