// enums let us define a set of named constants in a series
// They will start at 0 and +1 each listed constant (ex 1)
// Or they can be initialized at a value of your own choosing (ex 2)
// You can also use a string enum value where each one must be named

// looks like they can also be used to make union types (custom types in Elm)

export enum NumsEnum {
    Num1 = 0,
    Num2 = 1,
}

export enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

export enum StrEnum {
    Str1 = "Hello",
    Str2 = "Goodbye",
}
