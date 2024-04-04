function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNnumber = document.getElementById('secondNumber');
    let result = document.getElementById('result');
    result.textContent = Number(firstNumber.value) - Number(secondNnumber.value);
}