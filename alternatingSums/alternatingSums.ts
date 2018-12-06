// solution using filter and reduce

function alternatingSums(a: number[]): number[] {
    const oddIndexSums: number = a.filter((num, index) => index % 2 === 0).reduce((x, y) => x + y);
    const evenIndexSums: number = a.filter((num, index) => index % 2 !== 0).reduce((x, y) => x + y);
    return [oddIndexSums, evenIndexSums];
}

console.log(alternatingSums([50, 60, 60, 45, 70])); // [180, 105]

// solution using for loop

function alternatingSums2(a: number[]): number[] {
    let odd: number = 0;
    let even: number = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            odd += a[i];
        } else {
            even += a[i];
        }
    }
    return [odd, even];
}

console.log(alternatingSums2([50, 60, 60, 45, 70])); // [180, 105]

// someone else's solution that I found to be really clever

function alternatingSums3(a: number[]): number[] {
    return a.reduce((acc: number[], val: number, i: number) => {
        acc[i % 2] = acc[i % 2] + val;
        return acc;
    }, [0, 0]);
}
