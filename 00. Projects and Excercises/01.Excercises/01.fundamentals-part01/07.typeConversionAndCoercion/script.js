// Predict the result of these 5 operations without executing them:
// '9' - '5';                ---> 4
// '19' - '13' + '17';       ---> 617
// '19' - '13' + 17;         ---> 23
// '123' < 57;               ---> false
// 5 + 6 + '4' + 9 - 4 - 2;  ---> 1143

// 2. Execute the operations to check if you were right

let firstOperation = '9' - '5';
console.log(firstOperation, typeof firstOperation);


let secondOperation = '19' - '13' + '17';
console.log(secondOperation, typeof secondOperation);

let thirdOperation = '19' - '13' + 17; 
console.log(thirdOperation, typeof thirdOperation);


let fourthOperation = '123' < 57;
console.log(fourthOperation, typeof fourthOperation);

let fifthOperation = 5 + 6 + '4' + 9 - 4 - 2;
console.log(fifthOperation, typeof fifthOperation);