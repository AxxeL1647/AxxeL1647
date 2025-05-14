const heartPattern = [
  "00110001100",
  "01111011110",
  "11111111111",
  "11111111111",
  "11111111111",
  "01111111110",
  "00111111100",
  "00011111000",
  "00001110000",
  "00000100000"
];

const heartContainer = document.getElementById("heart");

let delay = 0;

heartPattern.forEach((row, rowIndex) => {
  [...row].forEach((cell, cellIndex) => {
    const span = document.createElement("span");
    span.className = "heart-cell";
    span.innerHTML = cell === "1" ? "❤️" : "";
    heartContainer.appendChild(span);
    if (cell === "1") {
      setTimeout(() => {
        span.style.opacity = 1;
      }, delay);
      delay += 100;
    }
  });
});