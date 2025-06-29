let calculate = "";

document.querySelector(".button-1").addEventListener("click", function () {
  calculate += "1";
  console.log(calculate);
});

document.querySelector(".button-2").addEventListener("click", function () {
  calculate += "2";
  console.log(calculate);
});

document.querySelector(".button-3").addEventListener("click", function () {
  calculate += "3";
  console.log(calculate);
});

document.querySelector(".button-4").addEventListener("click", function () {
  calculate += "4";
  console.log(calculate);
});

document.querySelector(".button-5").addEventListener("click", function () {
  calculate += "5";
  console.log(calculate);
});

document.querySelector(".button-6").addEventListener("click", function () {
  calculate += "6";
  console.log(calculate);
});

document.querySelector(".button-7").addEventListener("click", function () {
  calculate += "7";
  console.log(calculate);
});

document.querySelector(".button-8").addEventListener("click", function () {
  calculate += "8";
  console.log(calculate);
});

document.querySelector(".button-9").addEventListener("click", function () {
  calculate += "9";
  console.log(calculate);
});

document.querySelector(".button-0").addEventListener("click", function () {
  calculate += "0";
  console.log(calculate);
});

document.querySelector(".button-plus").addEventListener("click", function () {
  calculate += "+";
  console.log(calculate);
});

document.querySelector(".button-minus").addEventListener("click", function () {
  calculate += "-";
  console.log(calculate);
});

document.querySelector(".button-equel").addEventListener("click", function () {
  calculate = eval(calculate);
  console.log(calculate);
});
  