// Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// function percentageOfWorld1(population) {
//     let worldPopulation = 7888; //millions

//     const percentPopulation = (population / worldPopulation) * 100;
//     const answer =  `\nThe country population is ${percentPopulation.toFixed(2)}% of the world population.`;
//     return answer;
// }

// const russiaPopulaiton = percentageOfWorld1(143.4);
// const usaPopulaiton = percentageOfWorld1(331.9);
// const indiaPopulaiton = percentageOfWorld1(1408);

// console.log(russiaPopulaiton, usaPopulaiton, indiaPopulaiton);

const percentageOfWorld3 = population => {
    let worldPopulation = 7888; //millions;
    const percentPopulation = (population / worldPopulation) * 100;
    const answer =  `\nThe country population is ${percentPopulation.toFixed(2)}% of the world population.`;
    return answer;
}

const russiaPopulaiton = percentageOfWorld3(143.4);
const usaPopulaiton = percentageOfWorld3(331.9);
const indiaPopulaiton = percentageOfWorld3(1408);

console.log(russiaPopulaiton, usaPopulaiton, indiaPopulaiton);