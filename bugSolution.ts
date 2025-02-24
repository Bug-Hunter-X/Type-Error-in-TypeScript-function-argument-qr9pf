function greeter(person: string | string[]) {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' and ');
    }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //Corrected

let user2 = "Jane Doe";
console.log(greeter(user2));//Corrected