function vowelCounter(input) {
    let stringName = input[0];

    let charFromString;

    let count = 0;

    for(i = 0; i <= stringName.length; i++) {
        charFromString = stringName.charAt(i);

        if(charFromString === "a" || charFromString === "e" || charFromString === "i" || charFromString === "u" || charFromString === "o") {
            count++;
        }else if(charFromString === "A" || charFromString === "E" || charFromString === "I" || charFromString === "U" || charFromString === "O") {
            count++;
        }
    }

    console.log(count);
}

vowelCounter(["Hello World"]);


// Vowel Counter: Write a function that takes a string as input and returns the number of vowels in the string. Use a for loop and an if statement to check each character in the string and increment a counter if it is a vowel. Example input: "Hello World". Example output: 3.