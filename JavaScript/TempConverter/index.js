

const fButton = document.getElementById('farenheitBtn');
const cButton = document.getElementById('celsiusBtn');

document.getElementById('submitBtn').onclick = function() {

    let temp;

    if(cButton.checked){

        temp = document.getElementById('myTemp').value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById('tempLabel').innerHTML = temp + "°C"

    }else if(fButton.checked){

        temp = document.getElementById('myTemp').value;
        temp = Number(temp);
        temp = toFarenheit(temp);
        document.getElementById('tempLabel').innerHTML = temp + "°F"

    }else{
        document.getElementById('tempLabel').innerHTML = "Please Select a Unit."
    }
}


function toCelsius(temp) {
    return (temp - 32) * (9 / 5);
}
function toFarenheit(temp) {
    return temp * 9/5 + 32;
}