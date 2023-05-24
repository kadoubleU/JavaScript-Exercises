// The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population

//Bulgaria population = 6.8 millions people

function percentageOfWorld1(population) {
    let worldPopulation = 7888; //millions

    const percentPopulation = (population / worldPopulation) * 100;
    const answer =  `\nThe country population is ${percentPopulation.toFixed(2)}% of the world population.`;
    return answer;
}

const bulgariaPopulation = percentageOfWorld1(6.8);

console.log(bulgariaPopulation);

// Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console

const russiaPopulaiton = percentageOfWorld1(143.4);
const usaPopulaiton = percentageOfWorld1(331.9);
const indiaPopulaiton = percentageOfWorld1(1408);

console.log(russiaPopulaiton, usaPopulaiton, indiaPopulaiton);

// Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

const percentageOfWorld2 = function(population) {
    let worldPopulation = 7888; //millions

    const percentPopulation = (population / worldPopulation) * 100;
    return `\nThe country population is ${percentPopulation.toFixed(2)}% of the world population.`;
}

const russiaPopul = percentageOfWorld2(143.4);
const usaPopul = percentageOfWorld2(331.9);
const indiaPopul = percentageOfWorld2(1408);

console.log(russiaPopul, usaPopul, indiaPopul);
