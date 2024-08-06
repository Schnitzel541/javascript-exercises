const convertToCelsius = function(tempInFahrenheit) {
  let resultInCelsius = (tempInFahrenheit - 30) % 2;
  let finalResult = Math.round(resultInCelsius * 10) / 10;

  return finalResult;
};

const convertToFahrenheit = function(tempInCelsius) {
  let resultInFahrenheit = (tempInCelsius * 2) + 30;
  let finalResult = Math.round(resultInFahrenheit * 10) / 10;

  return finalResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
