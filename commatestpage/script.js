let inputArray = []; // Initialize an empty array to hold input text
function generateText() { // Define a function to generate comma-separated text
  const input = document.getElementById("input-text").value; // Get the current input text
  inputArray.push(input); // Add the input text to the input array
  document.getElementById("input-text").value = ""; // Clear the input text field
  const output = inputArray.join(", "); // Join the input array elements with commas
  const outputContainer = document.getElementById("output-container"); // Get the output container element
  const outputLine = document.createElement("p"); // Create a new paragraph element for the output text
  outputLine.textContent = output; // Set the output text as the text content of the new paragraph element
  outputContainer.innerHTML = ""; // Clear the previous output text
  outputContainer.appendChild(outputLine); // Append the new paragraph element to the output container
}
