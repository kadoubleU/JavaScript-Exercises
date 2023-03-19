function stringConcatenation(input) {
    let wordOne = input[0];
    let wordTwo = input[1];

    let indexOne = wordOne.length;
    let indexTwo = wordTwo.length;

    let getCharOne;
    let getCharTwo;

    let i = 0;
    let k = 0;

    newString = "";

    while(indexOne >= 0 || indexTwo >= 0) {
        getCharOne = wordOne.charAt(i);
        getCharTwo = wordTwo.charAt(k);

        newString += getCharOne + getCharTwo;

        indexOne--;
        indexTwo--;
        i++;
        k++;
    }

    console.log(newString);
}

stringConcatenation(["Hello", "World"]);

// String Concatenation: Write a function that takes two strings as input and returns a new string that alternates characters from the two input strings. Use a while loop and an if statement to extract characters from each input string and append them to a new string until one of the input strings is empty. Example input: "Hello", "World". Example output: "HWeolrllod".