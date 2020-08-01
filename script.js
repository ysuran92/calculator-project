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
};

function back() {
    var value = document.getElementById("calc").value;
    document.getElementById("calc").value = value.substr(0, value.length - 1);
};

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

function changeColor(color) {
    botones.className = `calcInput${color}`;
    elementField.className = `calc${color}`;
};

function darkTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    botones.classList.toggle(`calcInputDark`);
    elementField.classList.toggle(`calcDark`);
}