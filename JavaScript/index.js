// let age = prompt("How old are you?");

// if (age >= 18) {
//     console.log("You are old enough to vote!");
// } else if (age < 18) {
//     console.log("You are too young to vote.");
// }
// else {
//     console.log("Sorry, you are too young to vote.");
// }

// let online = false;

// if (online) {
//     console.log("You are online!");
// } else {
//     console.log("You are offline.");
// }


// document.getElementById("myButton").onclick = function(){
//     const myCheckBox = document.getElementById("myCheckbox");
//     const visa = document.getElementById("visa");
//     const mastercard = document.getElementById("mastercard");
//     const amex = document.getElementById("amex");

//     if(myCheckBox.checked) {
//         console.log("You are a male.");
//     }else {
//         console.log("You are a female.");
//     }

//     if(visa.checked) {
//         console.log("You are a visa card holder.");
//     }
//     else if(mastercard.checked) {
//         console.log("You are a mastercard card holder.");
//     }
//     else if(amex.checked) {
//         console.log("You are an amex card holder.");
//     }
//     else {
//         console.log("You are not a card holder.");
//     }
// }

let grade = prompt("Enter your grade");

switch(grade) {
    case "A":
        console.log("You got an A");
        break;
    case "B":
        console.log("You got a B");
        break;
    case "C":
        console.log("You got a C");
        break;
    case "D":
        console.log("You got a D");
        break;
    case "F":
        console.log("You got an F");
        break;
    default:
        console.log("You did not enter a valid grade");
        break;
}