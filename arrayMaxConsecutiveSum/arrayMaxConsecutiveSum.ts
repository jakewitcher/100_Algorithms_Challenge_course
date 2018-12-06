function sumOfConsecutives(arr: number[], num: number, index: number): number {
    if (index + 1 >= num) {
        return arr[index];
    }
    return arr[index] + sumOfConsecutives(arr, num, index + 1);
}

function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    return inputArray.reduce((maxSum: number, num: number, index: number) => {
        const consecutiveSum = sumOfConsecutives(inputArray, k + index, index);
        if (maxSum < consecutiveSum) {
            return consecutiveSum;
        }
        return maxSum;
    }, 0);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4)); // 15
console.log(arrayMaxConsecutiveSum([2, 3, 15, 1, 6, 7, 9, 12], 3)); // 28
