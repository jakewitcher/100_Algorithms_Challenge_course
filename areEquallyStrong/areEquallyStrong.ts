function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    if (yourLeft + yourRight === friendsLeft + friendsRight) {
        return true;
    }
    return false;
}

console.log(areEquallyStrong(10, 15, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 9)); // false
