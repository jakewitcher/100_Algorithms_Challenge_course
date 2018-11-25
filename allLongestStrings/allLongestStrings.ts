function allLongestStrings(inputArray: string[]): string[] {
    const longestString: string = inputArray.reduce((a: string, b: string) => {
        if (a.length > b.length) {
            return a;
        }
        return b;
    });
    return inputArray.filter((str: string) => str.length === longestString.length);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // [ "aba", "vcd", "aba"]
console.log(allLongestStrings(["abafe", "aa", "adega", "vcd", "aba", "rolsd", "b", "abdrc"]));
// ["abafe", "adega", "rolsd", "abdrc"]
console.log(allLongestStrings(["aba", "aa", "adca", "vcd", "abad"])); // ["adca", "abad"]
