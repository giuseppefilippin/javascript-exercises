const convertToCelsius = function(tempF) {
  let realTemp = ((tempF - 32) * (5/9));
  return Math.round(realTemp * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  let realTemp = (tempC * (9/5)) + 32;
  return Math.round(realTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
