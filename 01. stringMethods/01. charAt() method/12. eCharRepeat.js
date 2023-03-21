function eCharRepeat(input) {
    let stringName = input[0];

    let count = 0;

    let getChar = "";
    for(let i = 0; i < stringName.length; i++) {
        getChar = stringName.charAt(i);

        if(getChar === "e" || getChar === "E") {
            count++;
        }
    }

    console.log(count);
}

eCharRepeat(["hello world"]);



// Write a function that takes a string and returns the number of times the letter "e" appears using charAt() and a loop