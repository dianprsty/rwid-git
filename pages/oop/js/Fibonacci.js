import { Fibonacci } from "../../../src/oop/Fibonacci.js";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const numbers = new Fibonacci(sequence).generate(method);

    document.getElementById("result").innerHTML = document.getElementById(
      "result",
    ).innerHTML = numbers
      .map(number => `<div class="result-item-fibonacci">${number}</div>`)
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});