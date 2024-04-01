const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age;

myButton.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 120){
        resultElement.textContent = "You are too old";
    }
    else if(age == 0){
        resultElement.textContent = "You are 0 years old?";
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if(age < 0){
        resultElement.textContent = "Your age cant be below 0";
    }
     else{
        resultElement.textContent = "You must be 18 ? enter this site";
    }
}
/*
myButton.input.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
*/


