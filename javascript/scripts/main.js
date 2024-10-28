
// document body
const body = document.body;
// document element with id "test"
const test = document.querySelector("#test");
// output selector
const output = document.querySelector('output');

const colorToggle = (elem) => {
  let colour, backgroundColour;
  if (elem.style.backgroundColor === 'white') {
    elem.style.backgroundColor = 'black';
    elem.style.color = 'white';
    colour = 'white'
    backgroundColour = 'black';
  } else {
    elem.style.backgroundColor = 'white';
    elem.style.color = 'black';
    colour = 'black';
    backgroundColour = 'white';
  }
  let outputSize = parseFloat(getComputedStyle(output).fontSize);
  console.log(outputSize);
  output.style.fontSize = outputSize + 1 + 'px';
  console.log('%cBackground Toggled!', `color:${colour};background-color:${backgroundColour}`);
};

test.addEventListener("click", () => {
  colorToggle(body);
});