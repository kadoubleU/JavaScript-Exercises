function truncatingLongTitle(input) {
    let title = input[0];
    let truncLength = Number(input[1]);

    let truncatedTitle = title.slice(0, truncLength);

    console.log(`${truncatedTitle}...`);
}

truncatingLongTitle(["The Lord of the Rings: The Fellowship of the Ring", 20]);

// Truncating a long title to fit within a limited space
// Input: ["The Lord of the Rings: The Fellowship of the Ring", 20]
// Output: ["The Lord of the Ring..."]