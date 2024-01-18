let a;
let b;
let c;

document.getElementById("myButton").onclick = function(){
    a = document.getElementById("sideA").value;
    a = Number(a);
    b = document.getElementById("sideB").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("result").innerHTML = "Side C is: " +c;
}