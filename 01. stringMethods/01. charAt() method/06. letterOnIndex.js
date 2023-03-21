function letterOnIndex(input) {
    let theWord = input[0];
    let theNumber = Number(input[1]);

    let getTheLetter = theWord.charAt(theNumber);

    console.log(getTheLetter);
}

letterOnIndex(["hello", 2]);

// Write a function that takes a string and a number, and returns the character at the index specified by the number using charAt()