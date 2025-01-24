"use strict";

let loves = ["Make Treats!", "Design!", "Craft!"];

let ul = document.getElementById("my-list");

loves.forEach((love) => {
  let li = document.createElement("li");
  li.textContent = love;
  ul.appendChild(li);
});

let contactButton = document.getElementById("contactPage");
contactButton.addEventListener("click", function () {
  alert("Ready to Talk!");
});

let contactButton2 = document.getElementById("contactPage2");
contactButton.addEventListener("click", function () {
  alert("Ready to Talk!");
});

let contactButton3 = document.getElementById("contactPage3");
contactButton.addEventListener("click", function () {
  alert("Ready to Talk!");
});

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
    alert("I got it!");
});