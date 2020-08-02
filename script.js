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

let botones = document.getElementById("calcInput");
let elementField = document.getElementById("calc");
let element = document.body;
let sliderDark = document.getElementById("sliderDark");
let redBTN = document.getElementById("red");
let greenBTN = document.getElementById("green");
let blueBTN = document.getElementById("blue");
let yellowBTN = document.getElementById("yellow");
let silverBTN = document.getElementById("silver");
let radio1 = document.getElementById("customRadio1");
let radio2 = document.getElementById("customRadio2");

function enableColors() {
    redBTN.disabled = false;
    greenBTN.disabled = false;
    blueBTN.disabled = false;
    yellowBTN.disabled = false;
    silverBTN.disabled = false;
}

function disableColors() {
    redBTN.disabled = true;
    greenBTN.disabled = true;
    blueBTN.disabled = true;
    yellowBTN.disabled = true;
    silverBTN.disabled = true;
}

function changeColor(color) {
    botones.className = `calcInput${color}`;
    elementField.className = `calc${color}`;
    element.classList.remove("dark-mode");
    botones.classList.remove(`calcInputDark`);
    elementField.classList.remove(`calcDark`);
}

function darkTheme() {
    element.classList.add("dark-mode");
    botones.classList.add(`calcInputDark`);
    elementField.classList.add(`calcDark`);
    disableColors();
};

function lightTheme() {
    element.classList.remove("dark-mode");
    botones.classList.remove(`calcInputDark`);
    elementField.classList.remove(`calcDark`);
    enableColors();
}