const formDOM = document.querySelector(".form");
const actionDOM = document.querySelector("#action").value;
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
    parseInt(firstNumber.value);
    parseInt(secondNumber.value);
    const veiksmas = actionDOM;
    const res = matematika[veiksmas](parseInt(firstNumber.value), parseInt(secondNumber.value));
    console.log(res);
    return resultDOM.innerHTML = `${firstNumber.value} ${veiksmas} ${secondNumber.value} = ${res}`;
});
