// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

//------------------------------------------------------------

// Excercise 1: Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language', but don't assign it any value yet

// let isIsland = false;
// let language;

//From Previous Excercise 

// let country = "Bulgaria";
// let continent = "Europe";
let population = "6.8";

//-----------------------------------------------------------

// Excercise 2: Log the types of 'isIsland', 'population', 'country' and 'language' to the console

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof language);


// ------------------------------------------------------
//-------------------------------------------------------

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens



// Excercise 1: Set the value of 'language' to the language spoken where you live.

language = "Bulgarian";

// Excercise 2: Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.


const isIsland = false;
const country = "Bulgaria";
const continent = "Europe";

// 3. Try to change one of the changed variables now, and observe what happens

// country = "England";

//------------------------------------------------
//------------------------------------------------

// If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese

//1. If your country split in half, and each half would contain half the population then how many people would live in each half?
const halfPopulation = Number(population) / 2;

// 2. Increase the population of your country by 1 and log the result to the console

const increasedPopulation = Number(population) + 1;
console.log(increasedPopulation);

// 3. Finland has a population of 6 million. Does your country have more people than Finland?

const finlandPopulation = 6;
const biggestPopulation = population > finlandPopulation;
console.log(biggestPopulation);

// 4. The average population of a country is 33 million people. Does your country have less people than the average country?

const averageCountryPopulation = 33;

const isLess = population < averageCountryPopulation;
console.log(isLess);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese

const description = "Portugal is in Europe, and it's 11 million people speak portuguese";
console.log(description);

//------------------------------------------------
//------------------------------------------------

// Recreate the 'description' variable from the last assignment, this time using the template literal syntax

const templateDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;

console.log(templateDescription);