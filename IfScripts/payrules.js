"use strict"
window.onload = init;
function init() {
    const calculateButton = document.getElementById("buttonSubmit");
    calculateButton.onclick = calculatePay;
  }
  
  function calculatePay() {
    //query html elements on the page and put them into variables
    const hoursWorkedInput = document.getElementById("hoursWorkedInput");
    const payRateInput = document.getElementById("payRateInput");
    const resultParagraph = document.getElementById("resultParagraph");
  
    //calculate something
    let hoursWorked = Number(hoursWorkedInput.value);
    let payRate = Number(payRateInput.value);
    let pay = hoursWorked * payRate;
  
    //create your message to display
    let message = `Pay is: ${pay}`;
  
    //display your message
    resultParagraph.value = message;
  }



// calculate gross pay 
// 
// let payRate = document.getElementById("payRateInput");
// let hoursWorked = document.getElementById("hoursWorkedInput");

// function init() {
    
// }