/**
 * Convert the temperature into Celsius To Kelvin
 * Formula:  Kelvin = Celsius + 273.15.
 * 
 */

function celsiusToKelvin(celsius){

    const kelvin= celsius + 273.15;

    return kelvin;
}

const result= celsiusToKelvin(100);

console.log(result);