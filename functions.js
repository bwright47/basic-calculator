/**
 * Created by bwright47 on 5/13/2016.
 */


function plus(a, b) {
    var sum = a + b;
    console.log("The sum of the two numbers is: " + sum);
    return sum;
}

function handlePlus() {
    firstValue = parseFloat(prompt("Enter first value"));
    var firstValue = document.getElementById("firstValue").value;
    //check if not a number
    if (isNaN(firstValue)) {
        alert("Please enter a number!");
        return;
    }
    secondValue = parseFloat(prompt("Enter second value"));

    var result = plus(firstValue, secondValue);
    //console.log("Taking the result * firstValue " + multiple(result, firstValue));
}

function subtract(a, b) {
    var sum = a - b;
    console.log("The difference between the two numbers is: " + sum);
    return sum;
}

function handleSubtract() {
    firstValue = parseFloat(prompt("Enter first value"));
    secondValue = parseFloat(prompt("Enter second value"));
    var result = subtract(firstValue, secondValue);
}

function multiple(a, b) {
    var sum = a * b;
    console.log("The sum of the two numbers times together is: " + sum);
    return sum;
}

function handleMultiple() {
    firstValue = parseFloat(prompt("Enter first value"));
    secondValue = parseFloat(prompt("Enter second value"));
    var result = multiple(firstValue, secondValue);
}

function divide(a, b) {
    
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    var sum = a / b;
    console.log(" The sum of the two numbers divided equals: " + sum);
    return sum;
}

function handleDivision() {
    firstValue = parseFloat(prompt("Enter first value"));
    secondValue = parseFloat(prompt("Enter second value"));
    var result = divide(firstValue, secondValue);
}

function results(myresult) {
    alert("Hello World");//built in Javascript function
    var myresult = MyFunction(6, 9);
}

//var module = {};
module.exports = {
    plus: plus,
    subtract: subtract,
    multiple: multiple,
    divide: divide
    
};

