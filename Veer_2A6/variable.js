// global varibles
let globalVar="I am global variable"
console.log(globalVar)

function myFunction(){
    console.log(globalVar)
}

myFunction()
console.log(globalVar)

// local variable
function hello(){
   let localVar="I am local variable"
   console.log(localVar)
}

hello()
// console.log(localVar)

// block scope 
{
    var blockScope="I am block scope"
    console.log(blockScope)
}
console.log(blockScope)

//reference varaible
