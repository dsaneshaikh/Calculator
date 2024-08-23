const buttons = document.querySelectorAll("button");
const result = document.querySelector("#main_result");
const calculation = document.querySelector("#expression");

let reset = false;

function getValues() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.innerText);
      if (e.target.innerText == "=") {
        if (result.innerText == "") {
          return;
        }
        let exp = result.innerText;
        calculate(exp);
        reset = true;
      } else if (e.target.innerText == "Del") {
        domMan(e.target.innerText);
      } else {
        domMan(e.target.innerText);
      }
    });
  });
}

function domMan(value) {
  if (reset == true && value != "Del") {
    result.innerText = "";
    calculation.innerText = "";
    result.innerText = value;
    reset = false;
    console.log("passed reset");
  } else if (value == "Del") {
    let previous = result.innerText;
    result.innerText = previous.slice(0, -1);
  } else {
    result.innerText += value;
  }
}

function calculate(expression) {
  try {
    calculation.innerText = result.innerText;
    result.innerText = eval(expression);
  } catch (err) {
    console.log("error", err);
    result.innerText = "";
  }
}
getValues();
