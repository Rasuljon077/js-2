let userName = prompt("ismingizni kiriting")
console.log(userName);

let userAge = +prompt(userName + " yoshingizni kiriting")
console.log("sizning yoshingiz " + userAge + " da");

if (userAge >= "0" && userAge <= "5" ) {
    alert("yoshsiz boxshaga boring");
}else if(userAge >= "6" && userAge <= "18"){
    alert("yoshsiz oqishingiz kerak")
}else if(userAge >= "19" && userAge <= "25"){
    alert("yaxshi ishga joylashishingiz kerak")
}else if(userAge >= "26"  && userAge <= "40"){
    alert("yaqinda pensaga chiqasiz ")
}else if(userAge >= "41" && userAge <= "70"){
    alert("pensaga chiqibsiz")
}else {
    alert("haliham tirikmisiz")
}

 alert(userName + " misollarni yeching")
 let first = +prompt("5 + 7")
 let ansver1 = "15"
 if (first == ansver1) {
    console.log("sizning javob togri");
    alert("sizning javob togri");
 } else {
    console.log("misol-1: 5 + 7 | " + " togri javob "+ ansver1 + "|| siznign javob " + first);
    alert("misol-1: 5 + 7 | " + " togri javob "+ ansver1 + "|| siznign javob " + first + "|| QAYTA URINIP KORING");
 }
 let second = +prompt("3 * 3")
 let ansver2 = "9"
 if (second == ansver2) {
    console.log("sizning javob togri");
    alert("sizning javob togri");
 } else {
    console.log("misol-2: 3 * 3 | " + " togri javob "+ ansver2 + "|| siznign javob " + second);
    alert("misol-2: 3 * 3 | " + " togri javob "+ ansver2 + "|| siznign javob " + second + " SONGI IMKONIYAT");
 }
 let third = +prompt("7 * 7")
 let ansver3 = "49"
 if (third == ansver3) {
    console.log("sizning javob togri");
    alert("sizning javob togri");
 } else {
    console.log("misol-3: 7 * 7 | " + " togri javob "+ ansver3 + "|| sizning javob " + third);
   alert("misol-3: 7 * 7 | " + " togri javob "+ ansver3 + "|| sizning javob " + third + " SONGI URINISH TUGADI");
 }
 

let a = +prompt("bopti " + userName +" istagan sonini kirit")
let b = +prompt("qayta son kirit")
let c = +prompt("yana br bor kirit")

if (a < b && a > c || a < c&& a > b) {
    console.log("ortadagi raqame " + a);
    alert("ortadagi raqame " + a)
} else if (b < a && b > c || b < c && b > a) {
    console.log("ortadagi raqame " + b);
    alert("ortadagi raqame " + b)
} else{
    console.log("ortadagi raqame " + c);
    alert("ortadagi raqam " + c)
}
