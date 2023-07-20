let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "D":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
          break;
        } catch {
          display.innerText = "Error!";
          break;
        }
      default:
        display.innerText += e.target.innerText;
    }
  });
});
