// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//------------------------------------------
//           S_O_L_U_T_I_O_N
//------------------------------------------

//Case 1:

// 1.

// Mark's Data
let markMass = 78;
let markHeight = 1.69;

// John's Data
let johnMass = 92;
let johnHeight = 1.95;

// 2.

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// 3.

let markHigherBMI = markBMI > johnBMI;
console.log(`Case 1: Is Mark have got higher BMI than John?\n- Answer: ${markHigherBMI}`);


//------------------------------------------------
//       C_O_D_I_N_G  C_H_A_L_L_E_N_G_E  2
//------------------------------------------------

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

if(markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
}else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

//Case 2:

// 1.

// Mark's Data
markMass = 95;
markHeight = 1.88;

// John's Data
johnMass = 85;
johnHeight = 1.76;

// 2.

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

// 3.

markHigherBMI = markBMI > johnBMI;
console.log(`Case 2: Is Mark have got higher BMI than John?\n- Answer: ${markHigherBMI}`);

//------------------------------------------------
//       C_O_D_I_N_G  C_H_A_L_L_E_N_G_E  2
//------------------------------------------------

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

if(markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
}else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}