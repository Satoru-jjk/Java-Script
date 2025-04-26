//slice method
let a="apple, Banana, Kiwi"
console.log(a.slice(5,10))
console.log(a.slice(-15,-8))
console.log(a.slice(-10))

//substr
console.log(a.substr(4,13))
//replace
let text="Good morning"
console.log(text.replace("morning","afternoon"))

let z="Good Morning and Good afternoon"
console.log(z.replace("Good","Great"))

let x="good morning"
console.log(x.replace("Good","great"))
//using the reccur exprssion you can overcome this 

//uppercase and lowercas
let a1="india"
console.log(a1.toUpperCase())
console.log(a1.toLowerCase())

//conact used to add two or more string 
let text1="hello"
let text2=" world"
console.log(text1+ text2)

//trim method
let val1="         hello world       "
console.log(val1.trim())
console.log(val1)

//split method 
let m="Hello"
console.log(m.split())

//string indexOf 
let c1="Apple"
console.log(c1.indexOf("e"))
console.log(c1.indexOf("p"))
console.log(c1.startsWith("Ap"))
console.log(c1.endsWith("e"))
console.log(c1.includes("pp"))
console.log(c1.search("2"))

