//date Object
//get method

let date=new Date()
document.writeln(date.getFullYear(2025))
document.writeln("<br>")

document.writeln(date.getMonth()+1)
document.writeln("<br>")

document.writeln(date.getDate())
document.writeln("<br>")

document.writeln(date.getHours())
document.writeln(date.getMinutes())
document.writeln(date.getSeconds())
document.writeln(date.getMilliseconds())
document.writeln("<br>")

document.writeln(date.getDay())
document.writeln("<br>")

document.writeln(date.getTime())
document.writeln("<br>")

//set methods i would prefer this method more than get one 
date.setFullYear(2025,3,23)
document.writeln(date)

