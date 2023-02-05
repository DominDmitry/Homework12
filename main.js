const someArr = [7, 23,  'blabla', 78, 'sdsdms', true, 7, false, undefined];

function arifmAverage(array) {
    let sumAvarage = 0;
    let count = 0;
    for (let i = 0; i < someArr.length; i++) {
        if (typeof array[i] === "number") {
            count = count + 1;
            sumAvarage = sumAvarage + array[i];
            } 
    } return sumAvarage/count;}

console.log(arifmAverage(someArr))

let firstNum = prompt('Enter first number');
let secondNum = prompt('Enter second number');
let operator = prompt('Enter operator');

function doMath(x, znak, y ) {
    let result = 0;
if (znak === '+') { 
    result = +x + +y;
   } else if (znak === '-') {
    result = x - y;
   } else if (znak === '*') {
    result = x * y;
   } else if (znak === '/') {
    result = x / y;
   } else if (znak === '%') {
    result = +x % +y;
   } else if (znak === '^') {
    result = x ** y;}
    else if (typeof x === "string" || typeof y === "string" || typeof znak === "string"){
        result = "We can't calculate it"
    }
    return result;
    }

let result = doMath(firstNum, operator, secondNum)  
alert (`Result your math operation ${firstNum + operator + secondNum} = ` + result);

function doMatrix(bigArrLenth, littleArrLength) {
    let bigArr = [];
    for (i=0; i<bigArrLenth;i++){
        let littleArr = [];
        for (let j = 0; j < littleArrLength; j++){
            littleArr.push(prompt(`Enter element ${i + 1}-st Arr, Number of element ${j + 1}`))
        }
        bigArr.push(littleArr);
    } return bigArr;
    }
    let bigMatrix = prompt('Enter how much Arr you want to create')
    let lenghtMatrix = prompt ('Enter how much Arr you want to join at big Arr')
let matrix= doMatrix(bigMatrix, lenghtMatrix)
alert(` Arr of Arr is` + matrix);

let userString = prompt('Enter your string');
let removeLetter = prompt('Enter what to remove');

function corrector(allString, corLetr) {
    let correctedString = '';
    for (let i = 0; i <= allString.length; i++) {
        
        if (corLetr.search(allString.charAt(i)) == -1 ) {
            correctedString = correctedString + userString.charAt(i);
        }
    } return correctedString;
}

alert('Your corrected phrase is: ' + corrector(userString, removeLetter));