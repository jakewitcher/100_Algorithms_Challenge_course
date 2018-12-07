function avoidObstacles(jump: number, inputArray: number[]): number {
    if (inputArray.filter((num) => num % jump === 0).length === 0) {
        return jump;
    }
    return avoidObstacles(jump + 1, inputArray);
}

console.log(avoidObstacles(2, [5, 3, 6, 7, 9])); // 4
console.log(avoidObstacles(2, [7, 2, 9, 8, 10])); // 6
console.log(avoidObstacles(2, [1, 4, 5, 12, 7])); // 8
