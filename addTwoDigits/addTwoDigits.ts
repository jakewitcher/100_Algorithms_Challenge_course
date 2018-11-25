function addDigits(num: number): number {
    const numArray: string[] = num.toString().split("");
    return numArray.map((x: string) => Number(x)).reduce((a: number, b: number) => a + b);
}

console.log(addDigits(29)); // 11
console.log(addDigits(46)); // 10
console.log(addDigits(786)); // 21
console.log(addDigits(786538)); // 37
