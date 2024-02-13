let userName = prompt("ismingizni kiriting")
console.log(userName);

let userAge = +prompt(userName + " yoshingizni kiriting")
console.log("sizning yoshingiz " + userAge + " da");

if (userAge >= "0" && userAge <= "5" ) {
    alert("boxchaga bor");
}else if(userAge >= "6" && userAge <= "18"){
    alert("maytap darsini qil")
}else if(userAge >= "19" && userAge <= "25"){
    alert("yaxshi ishlaga joylashvoldinmi")
}else if(userAge >= "26"  && userAge <= "40"){
    alert("ish haqqi kamliq qivottimi?")
}else if(userAge >= "41" && userAge <= "55"){
    alert("tabrik yaqinda pensaga ciqas")
}else {
    alert("pensaga chiqadigan vohtin bopti")
}

 alert(userName + " misollarni yeching")
 let first = +prompt("5 + 7")
 let ansver1 = "15"
 if (first == ansver1) {
    console.log("sizning javob togri");
 } else {
    console.log("misol-1: 5 + 7 | " + " togri javob "+ ansver1 + "|| siznign javob " + first);
 }
 let second = +prompt("3 * 3")
 let ansver2 = "9"
 if (second == ansver2) {
    console.log("sizning javob togri");
 } else {
    console.log("misol-2: 3 * 3 | " + " togri javob "+ ansver2 + "|| siznign javob " + second);
 }
 let third = +prompt("7 * 7")
 let ansver3 = "49"
 if (third == ansver3) {
    console.log("sizning javob togri");
 } else {
    console.log("misol-3: 7 * 7 | " + " togri javob "+ ansver3 + "|| sizning javob " + third);
 }
 

let a = +prompt("bopti " + userName +" istagan sonini kirit")
let b = +prompt("qayta son kirit")
let c = +prompt("yana br bor kirit")

if (a < b && a > c || a < c&& a > b) {
    console.log("ortadagi raqam " + a);
    alert("ortadagi raqam " + a)
} else if (b < a && b > c || b < c && b > a) {
    console.log("ortadagi raqam " + b);
    alert("ortadagi raqam " + b)
} else{
    console.log("ortadagi raqam " + c);
    alert("ortadagi raqam " + c)
}