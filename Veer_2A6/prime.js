var number=prompt("Please enter a number")
var count=0

    for(let i=1;i<=number;i++){
        if(number%i==0){
            count++
        }
        
    }
if(count<=2){
    alert("the numbe you have entered is a prime number")
}else{
    alert("the number you have used is not a prime number")
}