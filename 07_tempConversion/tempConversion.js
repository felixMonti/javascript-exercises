const convertToCelsius = function(temp) {
  let tempCelcius = (temp - 32)*5/9 
  return Math.round(tempCelcius);
  
};

const convertToFahrenheit = function(temp) {
  let tempFarenheit = (temp*9/5) + 32 
  return Math.round(tempFarenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
