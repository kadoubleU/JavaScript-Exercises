function getDomain(input) {
    let url = input[0];

    let char = "";

    let deleteProtocol = "";

    let domain = url.slice(0, "/");

    let breakLoop = false;

    for(let i = 0; i < url.length; i++) {
        char = url.charAt(i);

        domain += char;

        if(domain === "https://www.") {
            domain = "";
            i++;
            for(let j = i; j < url.length; j++) {
                char = url.charAt(j);
                i++;

                if(char === "/") {
                    breakLoop = true;
                    break;
                }
                domain += char;

                
            }
        }

        if(breakLoop === true) {
            break;
        }
    }

    console.log(domain);
}

getDomain(["https://www.google.com/search?q=javascript+slice&oq=javascript+slice"]);

// Getting the domain name from a URL

// Input: ["https://www.google.com/search?q=javascript+slice&oq=javascript+slice"]
// Output: ["google.com"]