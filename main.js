const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const button = document.getElementById("convertBtn");

const determineConverter = (e) => {
  let inputValue = document.getElementById("tempInput").value;
  let degreeValue = document.querySelector('input[name="degreeType"]:checked').value;
  console.log(degreeValue, inputValue);
  printToDom('tempOutput', inputValue);
}

button.addEventListener("click", determineConverter);