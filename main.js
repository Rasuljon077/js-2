let a = +prompt("istagan soningizni kiriting")
let b = +prompt("qayta son kiriting")
let c = +prompt("yana br bor kiriting")

if (a < b && a > c || a < c&& a > b) {
    console.log(a);
} else if (b < a && b > c || b < c && b > a) {
    console.log(b);
} else{
    console.log(c);
}