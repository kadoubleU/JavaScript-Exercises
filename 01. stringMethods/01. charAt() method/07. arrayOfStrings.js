function arrayOfStirngs(input) {
    let index = 0;

    let word = "";
    let letter = "";

    let theFirstLetters = "";

    while(index < input.length) {
        word = input[index];

        letter = word.charAt(0);

        theFirstLetters += letter;
        theFirstLetters += ", ";

        index++;
    }

    let lettersLength = theFirstLetters.length;

    let theLetters = theFirstLetters.substring(0, lettersLength-2);

    console.log(theLetters);
}

arrayOfStirngs(["hello", "world"]);




// Write a function that takes an array of strings and returns a new array with the first character of each string using charAt()