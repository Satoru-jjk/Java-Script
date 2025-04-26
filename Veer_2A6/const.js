//const arrays
const cars=['saab','Volvo','BMW']
console.log(cars)

// cars=['Toyota','alto 800','omni']
// console.log(cars)

cars[0]='alto 800'
console.log(cars)

cars[2]='lightning McQueen'

//push method
cars.push("AUDI")
console.log(cars)

//pop method 
cars.pop()
console.log(cars)

//unshift method 
cars.unshift("lexus")
console.log(cars)

//shift method 
cars.shift()
console.log(cars)

//constant object
const car1={type:'BMW', Model:"520d", color:"white"}
console.log(car1)

//not possible changing values since we are using const
// car1={type:'BMW', Model:"520d", color:"black"}
// console.log(car1)

car1.color="black"
console.log(car1)

//adding elements 
car1.owner="someone"
console.log(car1)

//deleting any vakue 
delete(car1.color)
console.log(car1)

