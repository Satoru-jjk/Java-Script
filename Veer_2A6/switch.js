//switch tag
let color="red"

switch(color){
    case "red":
        console.log("the color is red")
        break
    
    case "blue":
        console.log("the color is blue")
        break

    case "green":
        console.log("the color is green")
        break

    default: 
        console.log("invalid color")
        break
}

let day=Number(prompt("select a number from 1 to 7"))
switch(day){
    case 1:
        alert("today is Monday")
        break

    case 2:
        alert("today is Tuesday")
        break

    case 3:
        alert("today is Wednesday")
        break

    case 4:
        alert("today is Thursday")
        break

    case 5:
        alert("today is Friday")
        break

    case 6:
        alert("today is Saturday")
        break

    case 7:
        alert("today is Sunday")
        break
        
    default:
        alert("Invalid number")
        break


}