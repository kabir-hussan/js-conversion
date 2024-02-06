/**
 * Convert the number into inch to feet using function
 */

function inchToFeet(inch){

    const feetNumber= parseInt(inch / 12);

    const inchNumber= inch % 12;

    const feetAndInch= feetNumber + ' ft ' + inchNumber + ' inch.';

    return feetAndInch;
    

}


const result= inchToFeet(75);

console.log(result);