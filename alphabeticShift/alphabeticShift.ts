function alphabeticShift(inputString: string): string {
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

console.log(alphabeticShift("crazy")); // dsbaz
console.log(alphabeticShift("labradoodle")); // mbcsbeppemf
