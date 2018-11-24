function addBorder(picture: string[]): string[] {
    const width: number = picture[0].length;
    let frame: string = "";
    for (let i = 0; i < width; i++) {
        frame += "*";
    }
    picture = [frame, ...picture, frame];
    return picture.map((x) => `*${x}*`);
}

console.log(addBorder(["abc", "ded"])); // [ "*****", "*abc*", "*ded*", "*****"]
