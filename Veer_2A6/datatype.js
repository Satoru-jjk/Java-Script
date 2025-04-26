//datatypes
// number
var a=10
var b=10.5
var c=-10
var d=0xf 
let e=2.5e12//exponentail number
let f=10_0000_00

//string is a collection of character 
let s="hello"
console.log(s)
console.log(typeof(s))

var cityName='vadodara'
console.log("i had high expectation with "+cityName)
//backticks used to write multiple lines within one console function 
console.log(`hello there,,
    this is the 
     name of city im living right now ${cityName}`)

//boolean it is used to assign a varaible either true or false

var isValid=true;
console.log(isValid)
console.log(typeof(isValid))

//undefined it is used to specify a value of a variable which is not defined at
var z;
console.log(z)
console.log(typeof(z))

//Null it is used to expicitly specify that the value of a variable is null 
let x=null
console.log(x)
console.log(typeof(x)) 

//bigint 
let k=123458989032787382712865342354523452465657684784673n
console.log(k)
console.log(typeof(k))

//symbol it is used to create the unique values
let sym=Symbol("hii")
let sym1=Symbol("hii")
console.log(sym==sym1)

//difference between undefined and null
console.log(undefined==null)//true
console.log(undefined===null)//false

//lenght method
let sname="Veer"
console.log(sname.length)

//string method 
let x1="Raunak"
let y1=new String("Raunak")
console.log(x1==y1)//true

let a1=new String("Raunak")
let b1=new String("Raunak")
console.log(a1==b1)//false 
