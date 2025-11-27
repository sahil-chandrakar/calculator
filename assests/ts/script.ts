let str: string = "";
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const resultInput = document.querySelector("#result") as HTMLInputElement;

    if (!resultInput) return; 

    if (target.innerHTML === "=") {
      str = String(eval(str)); 
      resultInput.value = str;

    } else if (target.innerHTML === "AC") {
      str = "";
      resultInput.value = str;

    } else if (target.innerHTML === "C") {
      str = str.slice(0, -1);
      resultInput.value = str;

    } else {
      str += target.innerHTML;
      resultInput.value = str;
    }
  });
});
