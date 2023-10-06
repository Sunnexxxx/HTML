let age = prompt("Your Age:")


if(age < 16){console.log('You are a kid')}

if(age > 60){console.log("You are a pensioner")}

if(age > 16 && age <60){console.log("You are an mature"}

console.log(age)

let arr = [1, 2, "3"];
arr.push(4);

let obj = {
    name:"Honda",
    age:15,
}

console.log(obj.name + '\n' + obj.age);
console.log(obj.name.length + arr.length)

const arr = prompt("Enter your num:");
console.log(arr**2)

let arr = prompt("Enter your num:");
let num = prompt("Enter your num:");
let sum = parseInt(arr)+parseInt(num)
console.log(sum/2)

let arr = prompt("Enter square area:");
console.log("S = "+ arr**2)

let km = prompt("Enter km:");
const mile = (0.621371)
console.log(km*mile)

let num1 = prompt("Enter your num:");
let num2 = prompt("Enter your num:");
let add = parseInt(num1)+parseInt(num2)
let min = parseInt(num1)-parseInt(num2)
let umn = parseInt(num1)*parseInt(num2)
let del = parseInt(num1)/parseInt(num2)
console.log('summa:' + add + '\n' + "minus:" + min + '\n' + "umnojit:" + umn + '\n' + "delit:" + del)

let x = (s > 1) ? 2 : 3
