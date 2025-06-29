document.title = "Calculator";

let calculate = "0";

document.querySelectorAll(".button-number").forEach(function (button) {
  button.addEventListener("click", function () {
    const number = button.textContent;

    if (calculate === "0") {
      calculate = number;
    } else {
      calculate += number;
    }

    document.getElementById("result").textContent = calculate;
    console.log(number);
  });
});

document.querySelector(".button-reset").addEventListener("click", function () {
  calculate = "0";
  document.getElementById("result").textContent = calculate;
});

document
  .querySelector(".button-backspace")
  .addEventListener("click", function () {
    if (calculate.length > 1) {
      calculate = calculate.slice(0, -1);
    } else {
      calculate = "0";
    }
    document.getElementById("result").textContent = calculate;
  });

document
  .querySelector(".button-percentage")
  .addEventListener("click", function () {
    calculate /= 100;
    document.getElementById("result").textContent = calculate;
  });

document.querySelector(".button-comma").addEventListener("click", function () {
  calculate += ".";
  document.getElementById("result").textContent = calculate;
});

document.querySelectorAll(".button-operator").forEach(function (button) {
  button.addEventListener("click", function () {
    const operator = this.dataset.value;
    calculate += operator;
    document.getElementById("result").textContent = calculate;
  });
});

document.querySelector(".button-equal").addEventListener("click", function () {
  try {
    const result = Function('"use strict"; return (' + calculate + ")")();
    calculate = result.toString();
    document.getElementById("result").textContent = calculate;
    console.log(calculate);
  } catch (error) {
    calculate = "";
    document.getElementById("result").textContent = "Error";
  }
});
