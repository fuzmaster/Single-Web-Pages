let inputArray = [];
const generateBtn = document.getElementById("generate-btn");
const inputText = document.getElementById("input-text");

generateBtn.addEventListener("click", generateText);
inputText.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    generateBtn.click();
  }
});

function generateText() {
  const input = inputText.value;
  inputArray.push(input);
  inputText.value = "";
  const output = inputArray.join(", ");
  const outputContainer = document.getElementById("output-container");
  const outputLine = document.createElement("p");
  outputLine.textContent = output;
  outputContainer.innerHTML = "";
  outputContainer.appendChild(outputLine);
}
