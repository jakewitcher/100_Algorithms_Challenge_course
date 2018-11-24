export class PersonClass {
    public firstName: string; // public means it can be used/view by users and other code
    public readonly lastName: string; // cannot by changed
    protected age: number; // accessible from declaring class and child classes only
    private employed: boolean; // cannot be accessed

    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastNight;
    }

    public example1() {
        console.log(this.firstName); // functions can also be public or private
    }

    private example2() {
        console.log(this.lastName);
    }
}
