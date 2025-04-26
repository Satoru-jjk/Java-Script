// parseint method 
console.log(parseInt("-10"))
console.log(parseInt(-10.3))
console.log(parseInt("10 20 30"))//after space it doesnt convert to the number 
console.log(parseInt("10 years"))
console.log(parseInt("year"))//NAN not a number this is what it is 

//parsefloat method 
console.log(parseFloat("-10.3"))
console.log(parseFloat("10"))
console.log(parseFloat("10 yeaers"))
console.log(parseFloat("years"))
let date=new Date()
// date.setFullYear(2025,4,23)
// console.log(date)

//number
console.log(Number("10"))
console.log(Number(10.3))
let a=Number("10")
console.log(typeof(a))

let b=Number("India")
console.log(typeof(b))//datatype of NaN is number 

//a simple trick to string to number
let x=+"10"
console.log(typeof(x))

console.log(typeof("10"+10-20))
console.log(+"100"+10-"50")
