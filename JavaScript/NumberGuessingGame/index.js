let answer =Math.floor(Math.random() * 10 + 1);
let guess = 0;

document.getElementById('myButton').onclick =function() {

    let myGuess = document.getElementById('myNum').value;
    guess +=1;

    if (myGuess == answer){
        alert(`Congratulations ${answer} was the number. It took you ${guess} guesses`);
    } else if(myGuess < answer){
        alert('OOPS! Too Low...Try Again');
    }
    else{
        alert('OOP! Too Large...Try Again');
    }
}
