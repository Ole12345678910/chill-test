console.log("hello");

//this is a code that get the paragraf id and 
//places and text to the p tag

const p = document.getElementById("lol");
p.textContent = "Hello from Ole?";

//This adds another list inside the id list called
//empty list

const ul = document.getElementById("emptyList");
ul.innerHTML += "<li>Boat</li>";

//Changes the color of the list to 
//blue and weight to italic

emptyList.style.color = "blue";
emptyList.style.fontWeight = "italic";

//Changes the background color of the body to grey
document.body.style.backgroundColor = "grey";

//The code document.body.innerHTML = ""; sets the HTML 
//content of the entire <body> element to an empty string.

//document.body.innerHTML = "";

var hour = 20;


//example on if, else if and else
if (hour < 10) {
    greeting = "Good morning";
    } else if (hour < 18) {
    greeting = "Good day";
    } else {
    greeting = "Good evening";
    }

    console.log(greeting);


//var myNumber = 10;

/*if (myNumber == 10){
    console.log("Bingo");
} else {
    console.log("Aww, the number wasnt 10")
}*/

var apple = true, orage = false;

if ( apple !== orage){
    console.log("You cant compare apples and orages");
} else console.log("Hmmm seems apples and oranges are the same after all");


/*let inputName = prompt("what is ur name?")

if (inputName !== "") {
    alert ("Hello, " + inputName);
} else {
    alert ("Awww!");
}*/

/*
let inputName = prompt("what is ur name?")

if (inputName === "" || inputName === null) {
    alert ("Awww!");
} else {
    alert ("Hello, " + inputName);
}
*/

var fruit = "pear";

switch(fruit){
    case "An apple a day.."

}

/*
var number = prompt("please enter a number");
var test = Number(number);

if (isNaN(test)){
    console.log (number + " is not a number: not a valid number entered");
} else {
    console.log (number + " is indeed a number: Valdi number entered");
}*/

