const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const button = document.getElementById("convertBtn");

const toCelsius = () => {
  let temp = document.getElementById("tempInput").value;
  const finalTemp = ((temp - 32) * (5/9));
  domStringBuilder(finalTemp, "C");
};

const toFahrenheit = () => {
  let temp = document.getElementById("tempInput").value;
  const finalTemp = ((temp * (9/5)) + 32);
  domStringBuilder(finalTemp, "F");
};

const domStringBuilder = (finalTemp, unit) => {
  let domString = '';
    domString += '<h2>'
      domString += finalTemp
      domString += unit
    domString += '</h2>'
  printToDom('tempOutput', domString); 
};

const determineConverter = (e) => {
  let degreeValue = document.querySelector('input[name="degreeType"]:checked').value;
  if (degreeValue === "fahrenheit") {
    toCelsius();
  } else {
    toFahrenheit();
  };
}

button.addEventListener("click", determineConverter);

