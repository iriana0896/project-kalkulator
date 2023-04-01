const outputDisplay = document.querySelector('.output-display');

function display(num) {
    outputDisplay.value += num;
}

function calc() {
    try {
        outputDisplay.value = eval(outputDisplay.value);
    }
    catch(err) {
        alert('Invalid');
    }
}

function allClear() {
    outputDisplay.value = "";
}

function del() {
    outputDisplay.value = outputDisplay.value.slice(0,-1);
}