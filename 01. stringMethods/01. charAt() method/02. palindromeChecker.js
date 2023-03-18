function palindromeChecker(input) {
    let word = input[0];

    isPalindrome = false;

    index = 0;

    let letter;
    let lastsLetters;
    let breakCycle = false;
    let i = word.length-1;

    while(index < word.length) {
        letter = word.charAt(index);


        while (i >= 0) {
            lastsLetters = word.charAt(i);
            i--;
            break;
        }

        if(letter === lastsLetters) {
            isPalindrome = true;
        }else {
            isPalindrome = false;
            breakCycle = true;
            break;
        }

        if(breakCycle === true) {
            break;
        }
        index++;
    }

    console.log(isPalindrome);
}

palindromeChecker(["racecar"]);




// Palindrome Checker: Write a function that takes a string as input and returns true if the string is a palindrome (i.e., it reads the same forwards and backwards) and false otherwise. Use a while loop and an if statement to check whether the first and last characters in the string are the same, and then continue checking the remaining characters until the middle of the string is reached. Example input: "racecar". Example output: true.