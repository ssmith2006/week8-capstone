"use strict";

let loves = ["Make Treats!", "Design!", "Craft!"];

let ul = document.getElementById("my-list");

loves.forEach((love) => {
  let li = document.createElement("li");
  li.textContent = love;
  ul.appendChild(li);
});


