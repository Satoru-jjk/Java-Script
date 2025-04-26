//unary operators
let a="7"
a++;
++a
console.log(a)
let b=a++;
console.log(a)
console.log(b)

let c=7
console.log(++c + --c - ++c)
console.log(c)

//arithmetic operator
console.log(10+10)
console.log(10-3)
console.log(10*3)
console.log(10/3)//it indicates the quotient value
console.log(10%3)//it indicates the remainder value
console.log(10**10)//it is for power operator

//to string method
let x=100;
console.log(typeof(x))

let z=x.toString()
console.log(typeof(z))

//to exponential method()
let f=9.843
console.log(f.toExponential(2))
console.log(f.toExponential(10))

//to fixed() method
let g=93.39302958930
console.log(g.toFixed(3))
console.log(g.toFixed(7))

//to Precision method
let h=48300.3859
console.log(h.toPrecision(3))
console.log(h.toPrecision(7))

//assignment operator(=) its nothign but assigning the value

//console.log((a1<<b1))

//relational operator
console.log(NaN==NaN)
console.log(NaN===NaN)

//Bitwise operator
var a3=8,b3=2
console.log("a&b "+(a3&b3))
console.log("a|b "+(a3|b3))
console.log("a^b "+(a3^b3))
console.log('a~ '+(~a3))

//Logical operator
var a5=true, b5=false
console.log('a&&b :'+(a5&&b5))
console.log('a||b :'+(a5||b5))
console.log('!a :'+(!a5))

//ternary operator
var z1=4;
console.log((z==4)?console.log("hii"):console.log("hello"))