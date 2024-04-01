

/*console.log("hello");

document.getElementById("hi").textContent = "HI";
document.getElementById("hello").textContent = "hello";

let age = 20;
let price = 20.20;
let gpa = 2.1;

console.log(typeof age)

console.log(`You are ${age} old`);

console.log(`the price is ${price} `)
console.log(`Your gpa is  ${gpa} `)
*/

/*let firstName = `Ole`;
let email = `Randomemail@gmail.com`
let favorittFood = `Beef`;

console.log(firstName);
console.log(typeof firstName);

console.log(`Your name is ${firstName}`);
console.log(`You like ${favorittFood}`);
console.log(`Your email is ${email}`);


let online = false;
let forSale = true
let isStudent = true;

console.log()
console.log(`Bro is online: ${online} `); 
console.log(` Is this car for sale: ${forSale}`);

if (online = false){
    console.log(`Hello`)
} else{
    console.log(`LOL`)
}


let fullName = `Ole`;
let age = `20`;
let student = true;

document.getElementById(`p1`).textContent = `Your name is ` + fullName;
document.getElementById(`p2`).textContent = `Your age is ` + age;
document.getElementById(`p3`).textContent = `You are a student` + student;


let students = 30;

students --;

console.log(students);


let username;

document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById("myH1").textContent = `Hello ` + username;
}



let age = window.prompt("Wow old are you?");
age = Number(age);
age +=1;

console.log(age, typeof age);


let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


const PI = 3.14159; //if a string we wont uppercase the pi but its a number so its allowed

let radius;
let circumference;





document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}
*/


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel  = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count;
}