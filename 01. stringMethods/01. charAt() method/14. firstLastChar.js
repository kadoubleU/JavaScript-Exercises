function firstLastChar(input) {
    let stringName = input[0];

    let stringLength = stringName.length;

    let firstChar = stringName.charAt(0);
    let lastChar = stringName.charAt(stringLength - 1);

    if(firstChar === lastChar) {
        console.log("true");
    }else {
        console.log("false");
    }
}

firstLastChar(["hello"])



// Write a function that takes a string and checks if the first and last characters are the same using charAt() and an if statement