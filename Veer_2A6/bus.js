alert("older : do you have any available seats??")
var age=prompt("what is you age??")

if(age>70){
    let adhar1=prompt("do you have an adhar card?")
    if(adhar1=="yes"){
        alert("you can travel for free")
    }else{
        alert("yes seat is avaiable")
    }
}
else if(age>50){
    let adhar1=prompt("do you have an adhar card?")
    if(adhar1=="yes"){
        alert("yes seat is available")
    }else{
        alert(" seat is not avaiable")
    }
}else{
 alert("nope seat is not available")
}
                
