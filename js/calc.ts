import { validateForm } from './app/validation.js';

const actionDOM = (document.querySelector("#action") as HTMLSelectElement);
const firstNumber = (document.querySelector("#first_number") as HTMLInputElement);
const secondNumber = (document.querySelector("#second_number") as HTMLInputElement);
const submitDOM = (document.querySelector("button") as HTMLButtonElement);
const resultDOM = document.querySelector(".result");


const matematika = {
    "+": (a: number, b: number): number => { return a + b },
    "-": (a: number, b: number): number => { return a - b },
    "*": (a: number, b: number): number => { return a * b },
    "/": (a: number, b: number): number => { return a / b },
}



submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm("calc", "firstValue")
    validateForm("calc", "secondValue")
    parseInt(firstNumber.value)
    parseInt(secondNumber.value)
    const veiksmas = actionDOM.value;

    const res = matematika[veiksmas](parseInt(firstNumber.value), parseInt(secondNumber.value));

    return resultDOM.innerHTML = `${firstNumber.value} ${veiksmas} ${secondNumber.value} = ${res}`
})




