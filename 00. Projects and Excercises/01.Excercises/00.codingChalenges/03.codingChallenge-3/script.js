// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//--------------------------------------------------
//              S_O_L_U_T_I_O_N
//--------------------------------------------------

//Dolphins result

const firstDolphinScore = 96;
const secondDolphinScore = 108;
const thirdDolphinScore = 89;

// 1. Calculate the average score for each team, using the test data below
const dolphinAverageScore = (firstDolphinScore + secondDolphinScore + thirdDolphinScore) / 3;

//Koalas result

const firstKoalasScore = 88;
const secondKoalasScore = 91;
const thirdKoalasScore = 110;

// 1. Calculate the average score for each team, using the test data below
const koalasAverageScore = (firstKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

if(dolphinAverageScore > koalasAverageScore) {
    console.log(`The Dolphins are WINNERS with average score ${dolphinAverageScore.toFixed(2)} 🥇`);
} else if(dolphinAverageScore < koalasAverageScore) {
    console.log(`The Koalas are WINNERS with average score ${koalasAverageScore.toFixed(2)} 🥇`);
} else if(dolphinAverageScore === koalasAverageScore) {
    console.log("There is DRAW =");
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

console.log("BONUS EXCERCISE 1");

const dolphinBonus1AverageScore = (97 + 112 + 101) / 3;
const koalasBonus1AverageScore = (109 + 95 + 123) / 3;

if ((dolphinBonus1AverageScore > koalasBonus1AverageScore) && (dolphinBonus1AverageScore > 100)) {
    console.log(`The Dolphins are WINNERS with average score ${dolphinBonus1AverageScore.toFixed(2)} 🥇`);
}else if ((dolphinBonus1AverageScore < koalasBonus1AverageScore) && (dolphinBonus1AverageScore > 100)) {
    console.log(`The Koalas are WINNERS with average score ${koalasBonus1AverageScore.toFixed(2)} 🥇`);
}else if(dolphinBonus1AverageScore === koalasBonus1AverageScore) {
    console.log("There is DRAW =");
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

console.log("BONUS EXCERCISE 2");

const dolphinBonus2AverageScore = (97 + 112 + 101) / 3;
const koalasBonus2AverageScore = (109 + 95 + 106) / 3;

if ((dolphinBonus2AverageScore > koalasBonus2AverageScore) && (dolphinBonus2AverageScore > 100)) {
    console.log(`The Dolphins are WINNERS with average score ${dolphinBonus1AverageScore.toFixed(2)} 🥇`);
}else if ((dolphinBonus2AverageScore < koalasBonus2AverageScore) && (dolphinBonus2AverageScore > 100)) {
    console.log(`The Koalas are WINNERS with average score ${koalasBonus2AverageScore.toFixed(2)} 🥇`);
}else if((dolphinBonus2AverageScore === koalasBonus2AverageScore) && (dolphinBonus2AverageScore > 100) && (koalasBonus2AverageScore)) {
    console.log(`There is DRAW =. The average result for the two teams is: ${dolphinBonus2AverageScore.toFixed(2)}`);
}