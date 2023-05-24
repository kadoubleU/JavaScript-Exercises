"use strict"

// Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;

    return description;
}

    const info = describeCountry("Bulgaria", 6, "Sofia");

console.log(info);

// Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

console.log(describeCountry("Romania", 19.12, "Bucharest"));
console.log(describeCountry("Russia", 143.4, "Moscow"));
console.log(describeCountry("USA", 331.9, "Washington"));


