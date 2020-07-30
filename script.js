var btns = document.getElementsByTagName("button");
var calc = document.getElementById("calc");

for (var thisBtn of btns) {
    thisBtn.addEventListener("click", function() {
        if (this.innerHTML == "=") calc.value = eval(calc.value);
        else if (this.innerHTML == "C") calc.value = "";
        else if (
            this.innerHTML == "Red" ||
            this.innerHTML == "Green" ||
            this.innerHTML == "Blue" ||
            this.innerHTML == "Yellow" ||
            this.innerHTML == "Silver"
        )
            calc.value = calc.value;
        else calc.value += this.innerHTML;
    });
}

/*
document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 105) {
        calc.value += 9;
    } else {
        alert("Oh no you didn't.");
    }
}

*/

function back() {
    var value = document.getElementById("calc").value;
    document.getElementById("calc").value = value.substr(0, value.length - 1);
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 13 || event.code == "NumpadEnter") {
        calc.value = eval(calc.value);
    } else if (event.keyCode == 46) {
        calc.value = "";
    } else if (event.keyCode == 8) {
        back();
    } else {
        calc.value += event.key;
    }
});

/*
function changeColor(color) {
    let elList = document.querySelectorAll(".btnGen");
    elList.forEach(el => el.style.background = color);
};

function runColor() {
    changeColor('red');
};
*/

function changeColorRed() {
    let element = document.getElementById("calcInput");
    let elementField = document.getElementById("calc");
    elementField.classList.add("calcRed");
    elementField.classList.remove("calcBlue");
    elementField.classList.remove("calcGreen");
    elementField.classList.remove("calcYellow");
    elementField.classList.remove("calcSilver");
    element.classList.add("calcInputRed");
    element.classList.remove("calcInputBlue");
    element.classList.remove("calcInputGreen");
    element.classList.remove("calcInputYellow");
    element.classList.remove("calcInputSilver");
};

function changeColorBlue() {
    let element = document.getElementById("calcInput");
    let elementField = document.getElementById("calc");
    elementField.classList.add("calcBlue");
    elementField.classList.remove("calcRed");
    elementField.classList.remove("calcGreen");
    elementField.classList.remove("calcYellow");
    elementField.classList.remove("calcSilver");
    element.classList.add("calcInputBlue");
    element.classList.remove("calcInputRed");
    element.classList.remove("calcInputGreen");
    element.classList.remove("calcInputYellow");
    element.classList.remove("calcInputSilver");
};

function changeColorGreen() {
    let element = document.getElementById("calcInput");
    let elementField = document.getElementById("calc");
    elementField.classList.add("calcGreen");
    elementField.classList.remove("calcBlue");
    elementField.classList.remove("calcRed");
    elementField.classList.remove("calcYellow");
    elementField.classList.remove("calcSilver");
    element.classList.add("calcInputGreen");
    element.classList.remove("calcInputRed");
    element.classList.remove("calcInputBlue");
    element.classList.remove("calcInputYellow");
    element.classList.remove("calcInputSilver");
};

function changeColorYellow() {
    let element = document.getElementById("calcInput");
    let elementField = document.getElementById("calc");
    elementField.classList.add("calcYellow");
    elementField.classList.remove("calcBlue");
    elementField.classList.remove("calcGreen");
    elementField.classList.remove("calcRed");
    elementField.classList.remove("calcSilver");
    element.classList.add("calcInputYellow");
    element.classList.remove("calcInputRed");
    element.classList.remove("calcInputGreen");
    element.classList.remove("calcInputBlue");
    element.classList.remove("calcInputSilver");
};

function changeColorSilver() {
    let element = document.getElementById("calcInput");
    let elementField = document.getElementById("calc");
    elementField.classList.add("calcSilver");
    elementField.classList.remove("calcBlue");
    elementField.classList.remove("calcGreen");
    elementField.classList.remove("calcYellow");
    elementField.classList.remove("calcRed");
    element.classList.add("calcInputSilver");
    element.classList.remove("calcInputRed");
    element.classList.remove("calcInputGreen");
    element.classList.remove("calcInputYellow");
    element.classList.remove("calcInputBlue");
};