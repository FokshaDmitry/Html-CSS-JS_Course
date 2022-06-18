"use strict";

// _____________________________________Task 1__________________________________

// class Ant
// {
//     constructor()
//     {
//        this.Name = "Jojo"; 
//        this.Number = 1;
//     }

//     Work() 
//     {
//         console.log(`${this.Name} work! His number: ${this.Number}`)   
//     }
// }

//let tmp = new Ant();
//tmp.Work()

//____________________________________________Task 2____________________________________

// let Ant = function()
// {
//     this.name = "Jojo"
//     this.number = 1
//     this.work = () =>
//     {
//         console.log(`${this.name} work! His number: ${this.number}`)
//     }
//     this.freand = function(Ant) 
//     {
//         this.Name = "JojoFreand"
//         this.Number = 1 + Ant.number;
//         this.Work = () => {
//         console.log(`${this.Name} work! His number: ${this.Number}`)
//     }
//     }
    
// }

// let NewAnt = new Ant();
// let NewAntFreand = new NewAnt.freand(NewAnt)
// NewAnt.work();
// NewAntFreand.Work();

//_________________________________Task 3_______________________________

// let MutualFreand = 
// {
//     _name: "MainJojo",
//     _number: 0,
//     _work()
//     {
//         console.log(`${this._name} work! His number: ${this._number}`);
//     }

// }

// let Ant = function()
// {
//     this.name = "Jojo"
//     this.number = 1
//     this.work = () =>
//     {
//         console.log(`${this.name} work! His number: ${this.number}`)
//     }
//     this.freand = function(Ant) 
//     {
//         this.Name = "JojoFreand"
//         this.Number = 1 + Ant.number;
//         this.Work = () => 
//         {
//             console.log(`${this.Name} work! His number: ${this.Number}`)
//         }
//     }
    
// }
// Ant.prototype = MutualFreand;
// let NewAnt = new Ant();
// NewAnt.freand.prototype = MutualFreand;
// let NewAntFreand = new NewAnt.freand(NewAnt)
// NewAnt.work();
// NewAntFreand.Work();
// NewAnt._work()

//___________________________Task 4_______________________

// let MutualFreand = 
// {
//     _name: "MainJojo",
//     _number: 0,
//     _work()
//     {
//         console.log(`${this._name} work! His number: ${this._number}`);
//     }

// }

// let Ant = function()
// {
//     this.name = "Jojo"
//     this.number = 1
//     this.work = () =>
//     {
//         console.log(`${this.name} work! His number: ${this.number}`)
//     }
//     this.freand = function(Ant) 
//     {
//         this.Name = "JojoFreand"
//         this.Number = 1 + Ant.number;
//         this.Work = () => 
//         {
//             console.log(`${this.Name} work! His number: ${this.Number}`)
//         }
//     }
//     this.death = () =>
//     {
//         console.log(`${this.name} is dead! His number: ${this.number}`)
//         this.work = () =>
//         {
//             console.log(`${this.name} don't work! His number: ${this.number}`)
//         }
//         this.freand = function(Ant) 
//         {
//             console.log(`undefindet`)

//         }
//     }
// }
// Ant.prototype = MutualFreand;
// let NewAnt = new Ant();
// NewAnt.freand.prototype = MutualFreand;
// let NewAntFreand = new NewAnt.freand(NewAnt)
// NewAnt.work();
// NewAntFreand.Work();
// NewAnt._work()

// NewAnt.death()
// NewAnt.work();
// let NewNweFreand = new NewAnt.freand(NewAnt);

//______________________________________________Task 5___________________________________________

// class Ant
// {
//     constructor(NewAnt)
//     {
//         if(NewAnt !== undefined)
//         {
//             this.Number = 1 + NewAnt.Number
//             this.OldAnt = NewAnt;
//         }
//         else{
//             this.Number = 1
//         }
//     }
//     Work() 
//     {
//         console.log(`${this.Number} work!`)   
//     }
//     Infection()
//     {
//         console.log(`${this.Number} is dead`)
//         this.Work = () =>
//         {
//             console.log(`${this.Number} don't work`)
//         }
//         if(this.Number != 1)
//         this.OldAnt.Infection();
//     }
// }

// let FirstAnt = new Ant();
// FirstAnt.Work();
// let TwoAnt = new Ant(FirstAnt);
// TwoAnt.Work();
// let ThreeAnt = new Ant(TwoAnt);
// ThreeAnt.Work();
// let FourAnt = new Ant(ThreeAnt);
// FourAnt.Work();
// let FiveAnt = new Ant(FourAnt);
// FiveAnt.Work();

// FourAnt.Infection();

// FirstAnt.Work();
// TwoAnt.Work();
// ThreeAnt.Work();
// FourAnt.Work();
// FiveAnt.Work();

//__________________________________Task 6____________________________________

let AntJump = 
{
    Jump()
    {
        console.log(`${this.name} jump!`)
    }
}

let AntSwim = 
{ 
    Swim()
    {
        console.log(`${this.name} swim!`)
    }
}

function Antj(name)
{
    this.name = name;
    this.number = 1;
}

function Ants(name)
{
    this.name = name;
    this.number = 1;
}
function Ant(name)
{
    this.name = name;
    this.number = 1;
}
Antj.prototype = AntJump
Ants.prototype = AntSwim
Ant.prototype = {AntJump, AntSwim}

let NewAntJ = new Antj("Jojo")
let NewAntS = new Ants("Jojo")
let NewAnt = new Ant("Jojo")

NewAntJ.Jump();
NewAntS.Swim();
NewAnt.AntJump.Jump();
NewAnt.AntSwim.Swim()