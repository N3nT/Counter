let actual_value = parseInt(document.getElementById("actual_value").innerText);

function increase(){
    actual_value += 1;
    document.getElementById("actual_value").innerText = actual_value;
}

function decrease(){
    actual_value -= 1;
    document.getElementById("actual_value").innerText = actual_value;
}

function reset(){
    actual_value = 0;
    document.getElementById("actual_value").innerText = 0;
}

let buttons = document.querySelectorAll('button');
buttons.forEach(element => element.addEventListener('click', function(){
    if (actual_value > 0){
        document.getElementById("actual_value").style.color = "green";
    }
    else if(actual_value < 0){
        document.getElementById("actual_value").style.color = "red";
    }
    else{
        document.getElementById("actual_value").style.color = "black";
    }
}));