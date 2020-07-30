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
    element.classList.add("calcInputRed");
    element.classList.remove("calcInputBlue");
    element.classList.remove("calcInputGreen");
    element.classList.remove("calcInputYellow");
    element.classList.remove("calcInputSilver");
};

function changeColorBlue() {
    let element = document.getElementById("calcInput");
    element.classList.add("calcInputBlue");
    element.classList.remove("calcInputRed");
    element.classList.remove("calcInputGreen");
    element.classList.remove("calcInputYellow");
    element.classList.remove("calcInputSilver");
};