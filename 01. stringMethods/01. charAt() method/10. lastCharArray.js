function lastCharArray(input) {
    let index = 0;

    let word = "";
    let lastChar = "";

    let newArray = "";

    while(index < input.length) {
        word = input[index];

        let wordLength = word.length;

        let lastChar = word.charAt(wordLength-1);

        if(index === 0) {
            newArray += `[`;
        }

        newArray += `"${lastChar}", `
    

        index++;
    }

    let lettersLength = newArray.length;

    let theNewArray = newArray.substring(0, (lettersLength-2));

    if(index === input.length) {
        theNewArray += "]";
    }


    console.log(`NewArray${theNewArray}`);
}

lastCharArray(["hello", "world",]);



// Write a function that takes an array of strings and returns a new array with the last character of each string using charAt() and the length property