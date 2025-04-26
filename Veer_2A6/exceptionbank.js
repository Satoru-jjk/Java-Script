let balance=5000
let withdraw=1500

try{
    if(withdraw>balance){
        throw"insufficient balance"
    }else{
        balance-=withdraw
        console.log("transaction is succesfull. remaining balance : "+balance)
    }
} 
catch(error){
    console.log("Error"+error)
}finally{
    console.log("thank you visit again")
}