let userName = prompt("ismingizni kiriting")
let userAge = +prompt(userName + " yoshingizni kiriting")

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

let a = +prompt("bopti " + userName +" istagan sonini kirit")
let b = +prompt("qayta son kirit")
let c = +prompt("yana br bor kirit")

if (a < b && a > c || a < c&& a > b) {
    console.log(a);
} else if (b < a && b > c || b < c && b > a) {
    console.log(b);
} else{
    console.log(c);
}