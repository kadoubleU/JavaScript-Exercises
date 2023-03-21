function theCharBackwards(input) {
    let theString = input[0];
    let theNumber = input[1];

    let stringLength = theString.length;

    let charBackwards = theString.charAt(stringLength - theNumber);

    console.log(charBackwards);
}

theCharBackwards(["hello", 2]);

// Write a function that takes a string and a number, and returns the character at the index counting backwards from the end of the string specified by the number using charAt()