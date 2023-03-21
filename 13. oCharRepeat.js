function oCharRepeat(input) {
    let index = 0;

    let word = "";
    let count = 0;

    while(index < input.length) {
        word = input[index];

        let char;
        let charIndex = 0;

        while(charIndex < word.length) {
            char = word.charAt(charIndex);
            charIndex++;

            if(char === "o" || char === "O") {
                count++;
            }
        }


        index++;
    }

    console.log(count);
}

oCharRepeat(["hello", "world"]);


// Write a function that takes an array of strings and returns the number of times the letter "o" appears in total using charAt() and nested loops