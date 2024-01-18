let x;
let y;
let z;

document.getElementById("myButton").onclick = function(){
    x = Math.floor(Math.random() * 6)+1;
    document.getElementById("one").innerHTML = x;
    y = Math.floor(Math.random() * 6)+1;
    document.getElementById("two").innerHTML = y;
    z = Math.floor(Math.random() * 6)+1;
    document.getElementById("three").innerHTML = z;
}