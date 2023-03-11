let inputArray = [];
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateText);

function generateText() {
  const input = document.getElementById("input-text").value;
  inputArray.push(input);
  document.getElementById("input-text").value = "";
  const output = inputArray.join(", ");
  const outputContainer = document.getElementById("output-container");
  const outputLine = document.createElement("p");
  outputLine.textContent = output;
  outputContainer.innerHTML = "";
  outputContainer.appendChild(outputLine);
}
