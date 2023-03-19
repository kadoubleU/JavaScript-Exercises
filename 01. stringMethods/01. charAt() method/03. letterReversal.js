function letterReversal(input) {
    let stringName = input[0];

    let letter;

    let newString = "";

    for(i = stringName.length; i >= 0; i--) {
        letter = stringName.charAt(i);

        newString += letter;
    }

    console.log(newString);
}

letterReversal(["Hello World"]);

//Letter Reversal: Write a function that takes a string as input and returns a new string with the letters in reverse order. Use a for loop and the charAt() method to extract each character from the end of the string and append it to a new string. Example input: "Hello World". Example output: "dlroW olleH".