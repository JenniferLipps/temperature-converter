const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const button = document.getElementById("convertBtn");

const determineConverter = (e) => {
  let temp = document.getElementById("tempInput").value;
  let degreeValue = document.querySelector('input[name="degreeType"]:checked').value;
  const toFahrenheit = ((temp * (9/5)) + 32);
  const toCelsius = ((temp - 32) * (5/9));

  if (degreeValue === "fahrenheit") {
    // console.log(degreeValue, temp);
    printToDom('tempOutput', toFahrenheit);
  } else {
      if (degreeValue === "celsius") {
        printToDom('tempOutput', toCelsius);
      };
  };
}

button.addEventListener("click", determineConverter);