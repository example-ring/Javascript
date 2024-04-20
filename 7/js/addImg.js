const today = new Date();
const hour = today.getHours();
const container = document.querySelector("#container");

let newImg = document.createElement("img");
let newText = document.createElement("text");
newImg.src = (hour < 12) ? "img/melody.jpg" : "img/kuromi.jfif";

container.appendChild(newImg);