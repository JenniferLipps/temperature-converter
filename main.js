const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const toCelsius = () => {
  let temp = document.getElementById("tempInput").value;
  const finalTemp = Math.round(((temp - 32) * (5/9)));
  domStringBuilder(finalTemp, "C");
};

const toFahrenheit = () => {
  let temp = document.getElementById("tempInput").value;
  const finalTemp = Math.round(((temp * (9/5)) + 32));
  domStringBuilder(finalTemp, "F");
};

const domStringBuilder = (finalTemp, unit) => {
  let domString = '';
      
  if ((finalTemp > 90 && unit === "F") || (finalTemp > 32 && unit === "C")) {
    domString += '<h2 id="hot">';
  } else if ((finalTemp < 32 && unit === "F") || (finalTemp < 0 && unit === "C")) {
    domString += '<h2 id="cold">';
  } else {
    domString += '<h2 id="neutral">';
  };

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

const button = document.getElementById("convertBtn");

button.addEventListener("click", determineConverter);

const clearButton = document.getElementById("clearBtn");

const clear = () => {
  document.getElementById("tempInput").value = '';
  document.getElementById("tempOutput").innerHTML = '';
};

clearBtn.addEventListener("click", clear);