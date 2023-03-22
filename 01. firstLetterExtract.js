function firstLetterExtract(input) {
    let sentence = input[0];

    let char = "";

    let letters = "";
    let i = 0;
    
    for(i; i < sentence.length; i++) {
       char = sentence.charAt(i);
       
       if(char.charAt(i) === char.charAt(0)) {
            letters+= char;
            letters += " ";
       }
       
       if(char === " ") {
       
        char = sentence.charAt(i+1);
            letters += char;
            letters += " ";
       }
    }

    let spaceRemove = letters.length - 1;

    let newChar;
    let newArray = "";

    for(let j = 0; j < spaceRemove; j++) {

        newChar = letters.charAt(j);
        newArray += newChar;
    }
    console.log(`["${newArray}"]`);
}

firstLetterExtract(["The quick brown fox jumps over the lazy dog"]);


// Extracting the first letter of each word in a sentence
// Input: ["The quick brown fox jumps over the lazy dog"]
// Output: ["T q b f j o t l d"]