function capitalizedVowels(input) {
    let stringValue = input[0];

    let stringLength = stringValue.length;

    let index = 0;

    let getChar = 0;

    let newString = "";

    let upperCaseChar;

    while(index < stringLength) {
        getChar = stringValue.charAt(index);

        if(getChar === "a" || getChar === "e" || getChar === "i" || getChar === "o" || getChar === "u") {
            
            upperCaseChar = getChar.toUpperCase();

            newString += `${upperCaseChar}`
        }else {
            newString += getChar;
        }

            
        index++;
    }

    console.log(newString);
}

capitalizedVowels(["hello world"]);






// Write a function that takes a string and returns a new string with all the vowels (a,e,i,o,u) capitalized using charAt() and toUpperCase()