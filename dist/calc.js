import { validateForm } from './app/validation.js';
const actionDOM = document.querySelector("#action");
const firstNumber = document.querySelector("#first_number");
const secondNumber = document.querySelector("#second_number");
const submitDOM = document.querySelector("button");
const resultDOM = document.querySelector(".result");
const matematika = {
    "+": (a, b) => { return a + b; },
    "-": (a, b) => { return a - b; },
    "*": (a, b) => { return a * b; },
    "/": (a, b) => { return a / b; },
};
submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm("calc", "firstValue");
    validateForm("calc", "secondValue");
    parseInt(firstNumber.value);
    parseInt(secondNumber.value);
    const veiksmas = actionDOM.value;
    const res = matematika[veiksmas](parseInt(firstNumber.value), parseInt(secondNumber.value));
    return resultDOM.innerHTML = `${firstNumber.value} ${veiksmas} ${secondNumber.value} = ${res}`;
});
