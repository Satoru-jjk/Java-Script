//for loop
for(let u=0;u<=4;u++){
    console.log(u)
}

//for in
let fruits=['apple','mango','peach','melon']
for(a in fruits){
    console.log(fruits[a]);
}

//for of 
let cars=['volvo','toyota','audi']
for(let k of cars){
    console.log(k)
}

//for each 
let fruits1=['apple','orange','mango']
fruits1.forEach(item => console.log(item))
//it is a common method for array in all the languages

//while loop
let i=0
while(i<5){
    console.log(i)
    i++
}

//do while
var j=1;
do{
    console.log(j)
    j++
}while(j<=4)

//break
for(var s=0;s<=10;s++){
    if(s==3){break}
    console.log(s)
}

//continue
for(let i=0;i<=5;i++){
    if (i==4){continue}
    console.log(i)
}

