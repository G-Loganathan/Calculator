const resultInput = document.getElementById("resultInput");


function toDisplay(num) {
    resultInput.value += num 
}

function calculate() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        alert("Invalid");
    }
}

function Del() {
    resultInput.value = resultInput.value.slice(0,-1);
}

function Clear() {
    resultInput.value = "";
}


