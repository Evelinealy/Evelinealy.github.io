"use strict";
// Getting all needed html classes.
const display = document.querySelector(".solutions-display");
const display2 = document.querySelector(".numbers-display");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");
const numbers = document.querySelectorAll("#num");
const operators = document.querySelectorAll("#operator");

// Initial values
let initialInput = "";
let secondinitialInput = "";
let chosenOperator = "";
let roundIterate = false; // Indicates if the iteration is the first, second, third, etc.
let enterButtonPressed = false; // Indicates whether the enter button was pressed or not.

// Function that allows calculator to add an infinite amount of numbers
const add = function (...theNums) {
  return theNums.reduce((totalSum, num) => {
    return totalSum + num;
  }, 0);
};

// Function that allows calculator to subtract an infinite amount of numbers
const subtract = function (...theNums) {
  return theNums.reduce((total, num) => {
    return total - num;
  });
};

// Function that allows calculator to multiply an infinite amount of numbers
const multiply = function (...theNums) {
  return theNums.reduce((total, num) => {
    return total * num;
  }, 1);
};

// Function that allows calculator to divide an infinite amount of numbers
const divide = function (...theNums) {
  return theNums.reduce((total, num) => {
    return total / num;
  });
};

// Controls how the calculator chooses its operators.
const operate = function (operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return `Something's not right!`;
  }
};

// Function that retrieves both the first and second number. Uses the onclick events in HTML file to retrieve button values
function getNums(value) {
  if (roundIterate === true) {
    secondinitialInput += value;
    display.textContent = secondinitialInput;
  } else if (chosenOperator === "" || initialInput === "") {
    initialInput += value;
    display.textContent = initialInput;
  } else if (chosenOperator !== "" && initialInput !== "") {
    secondinitialInput += value;
    display.textContent = secondinitialInput;
  }
}

// Returns the object for the operator using the onclick event
function getOperator(value) {
  if (initialInput !== "" && chosenOperator === "") {
    chosenOperator += value; // Returns number
  }

  // If else statement so that calculator can run several operations.
  if (initialInput !== "" && secondinitialInput !== "") {
    display.textContent = operate(
      chosenOperator,
      +initialInput,
      +secondinitialInput
    );
    chosenOperator = "";
    roundIterate = true;
    initialInput = display.textContent;
    chosenOperator += value;
    secondinitialInput = "";
  }

  display2.textContent = `${initialInput} ${chosenOperator}`;
}

// Performs the actual calculator logic when the enter button is pressed by using the operate() function
function enterButton() {
  enter.addEventListener("click", () => {
    enterButtonPressed = true;
    if (
      initialInput !== "" &&
      chosenOperator !== "" &&
      secondinitialInput !== ""
    ) {
      let result = operate(chosenOperator, +initialInput, +secondinitialInput);

      // Check if the result is a float or regular number
      if (String(result).indexOf(".") > -1) {
        display.textContent = Number(result).toFixed(7);
      } else {
        display.textContent = result;
      }

      // Now restart the strings so that more numbers can be added
      initialInput = display.textContent;
      display2.textContent = `${initialInput}`;
      chosenOperator = "";
      secondinitialInput = "";
    } else {
      display.textContent = 0;
    }
  });
}

enterButton();

// This function controls the clear button and clears all options
function clearButton() {
  clear.addEventListener("click", () => {
    // Clear all variables
    initialInput = "";
    chosenOperator = "";
    secondinitialInput = "";

    // Clear all displays
    display.textContent = "";
    display2.textContent = "";

    // Clearing the indicator of round iteration
    roundIterate = false;
  });
}

clearButton();
