"use strict";
let str = "";
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const target = e.target;
        const resultInput = document.querySelector("#result");
        if (!resultInput)
            return;
        if (target.innerHTML === "=") {
            str = String(eval(str));
            resultInput.value = str;
        }
        else if (target.innerHTML === "AC") {
            str = "";
            resultInput.value = str;
        }
        else if (target.innerHTML === "C") {
            str = str.slice(0, -1);
            resultInput.value = str;
        }
        else {
            str += target.innerHTML;
            resultInput.value = str;
        }
    });
});
//# sourceMappingURL=script.js.map