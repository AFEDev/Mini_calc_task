const formDOM = <HTMLInputElement>document.querySelector(".form");
const actionDOM = (<HTMLSelectElement>document.querySelector("#action")).value;
const firstNumber = (document.querySelector("#first_number") as HTMLInputElement);
const secondNumber = (document.querySelector("#second_number") as HTMLInputElement);
const submitDOM = (document.querySelector("button") as HTMLInputElement);
const resultDOM = document.querySelector(".result");

const matematika = {
    "+": (a:number, b:number):number => {return a+b},
    "-": (a:number, b:number):number => {return a-b},
    "*": (a:number, b:number):number => {return a*b},
    "/": (a:number, b:number):number => {return a/b},
}

submitDOM.addEventListener('click', (e) => {
e.preventDefault();
parseInt(firstNumber.value)
parseInt(secondNumber.value)

const veiksmas = actionDOM;
const res = matematika[veiksmas](parseInt(firstNumber.value),parseInt(secondNumber.value));
console.log(res);

return resultDOM.innerHTML = `${firstNumber.value} ${veiksmas} ${secondNumber.value} = ${res}`
})        





