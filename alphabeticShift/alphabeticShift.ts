function alphabeticShift1(inputString: string): string {
    const alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const wordArray: string[] = inputString.split("");

    const shift: string[] = wordArray.map((char: string) => {
        if (char === "z") {
            return "a";
        }
        return alphabet.filter((c: string, i: number) => char === alphabet[i - 1])[0];
    });
    return shift.reduce((a, b) => a + b, "");
}

function alphabeticShift2(inputString: string): string {
    const wordArray: string[] = inputString.split("");
    const charCodeArray: number[] = wordArray.map((char) => {
        if (char === "z") {
            char = "a";
            return char.charCodeAt(0);
        }
        return char.charCodeAt(0) + 1;
    });
    return charCodeArray.map((c) => String.fromCharCode(c)).reduce((a, b) => a + b);
}

console.log(alphabeticShift1("crazy")); // dsbaz
console.log(alphabeticShift1("labradoodle")); // mbcsbeppemf

console.log(alphabeticShift2("crazy")); // dsbaz
console.log(alphabeticShift2("labradoodle")); // mbcsbeppemf
