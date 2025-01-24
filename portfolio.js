"use strict";


//these buttons are located on the portfolio page
let contactButton = document.getElementById("contactPage"); //has it own eventListener
contactButton.addEventListener("click", function () {
  // eventListener should have its own variable.  so I changed all variables to match.
  alert("Ready to Talk!");
});

let contactButton2 = document.getElementById("contactPage2");
contactButton2.addEventListener("click", function () {
  alert("Ready to Talk!");
});

let contactButton3 = document.getElementById("contactPage3");
contactButton3.addEventListener("click", function () {
  alert("Ready to Talk!");
});


