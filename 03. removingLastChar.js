function removeLastChar(input) {
    let stringValue = input[0];

    let stringNum = stringValue.length - 1;

    getRidLastChar = stringValue.slice(0, stringNum);

    console.log(getRidLastChar);
}

removeLastChar(["Hello World!"]);


// Removing the last character of a string

// Input: ["Hello World!"]
// Output: ["Hello World"]