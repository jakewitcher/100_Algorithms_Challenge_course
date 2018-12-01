function alphabetSubsequence(s: string): boolean {
    const charArray: string[] = s.split("");
    const charCodeArray: number[] = charArray.map((char) => char.charCodeAt(0));

    let count: number = 0;
    charCodeArray.reduce((a, b) => {
        if (a >= b) {
            count++;
            return b;
        }
        return b;
    });
    return count === 0;
}

console.log(alphabetSubsequence("zab")); // false
console.log(alphabetSubsequence("effg")); // false
console.log(alphabetSubsequence("cdce")); // false
console.log(alphabetSubsequence("ace")); // true
console.log(alphabetSubsequence("bxz")); // true
