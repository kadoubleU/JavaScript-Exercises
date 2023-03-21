function lastChar(input) {
    let getTheWord = input[0];

    let wordLength = getTheWord.length;

    let getTheChar = getTheWord.charAt(wordLength - 1);

    console.log(getTheChar);
}

lastChar(["hello"]);


// Write a function that takes a string and returns the last character of that string using charAt() and the length property