// Get the input element and store it in a variable
 let input=document.querySelector('#input')
//  console.log(input);
 

 //  function that display value
 function display(val) {
     input.value+=val;
}



// Define a function that handles keyboard events
function handles(event) {
  // Check if the event key is a number or an arithmetic symbol
    if (event.key >= '0' && event.key <= '9' || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='/') {
      // Append the event key to the input value
        input.value += event.key;
    }
}


// // Get the calculator container element and store it in a variable
var calculator=document.querySelector('.container');
// console.log(calculator);

// function that evaluate the digit and return result
function solve() {
  // Get the input value as a mathematical expression
  let expression =input.value 
  // here eval is a method function for solve the mathematics problem(expression)
  if (expression) {      // undefine ko remove krne ke liye if condition laga diya
    let result =eval(expression)  
    input.value = result;
  }

}

// Add an event listener to the calculator element for keyup events
calculator.onkeyup = function (event) {
  // Check if the event key code is 13 (Enter key)
    if (event.keyCode ===13) { 
         // Call the solve function
        solve();
    } 
}


//  function that clear the display input value
function clearInput() {
    input.value = "";
}




