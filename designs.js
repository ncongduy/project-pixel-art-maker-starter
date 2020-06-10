//Declare variable
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const table = document.querySelector("#pixelCanvas");
const color = document.querySelector("#colorPicker");

//Function create grid according height and width
function makeGrid() {
  for (let i = 1; i <= height.valueAsNumber; i++) {
    const vertical = document.createElement("tr");
    for (let j = 1; j <= width.valueAsNumber; j++) {
      const horizon = document.createElement("td");
      vertical.appendChild(horizon);
    }
    table.appendChild(vertical);
  }
}

//Create event when click Submit button
document.querySelector("p").addEventListener("click", makeGrid);

//Create event making color when click on table
table.addEventListener("click", function(evt) {
  if (evt.target.nodeName === "TD") {
    evt.target.style.backgroundColor = color.value;
  }
});
