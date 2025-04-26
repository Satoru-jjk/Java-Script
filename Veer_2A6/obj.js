var cars={'model':"BMW",
            'color':"black",
            'cost':"1.5 cr"
}
console.log(cars)
console.log(cars['color'])

let person={
    'name':"Veer",
    'tech':"JS",
    'laptop':{
        'CPU':"i9 14th gen",
        'ram':"32 gigs of ddr6 at 9000mhz",
        'brand':"Razor Blade",
        'gpu':"RTX 5090",
    }
}
console.log(person)
console.log(person.tech)
console.log(person.laptop.brand)
delete person.tech
console.log(person)

//using new keyword 
let car1=new Object();
car1.brand="Toyota"
car1.model="Supra MK4"
car1.color="white"
console.log(car1)
console.log(car1.model)

let animal=new Object()
let cat= animal
let dog= animal
console.log(cat==dog)//true

let horse=new Object()
console.log(cat==horse)//false
console.log(cat===horse)//false
console.log(Object.is(cat,horse))//false

//to stringfy 
console.log(JSON.stringify(cat)===JSON.stringify(horse))

