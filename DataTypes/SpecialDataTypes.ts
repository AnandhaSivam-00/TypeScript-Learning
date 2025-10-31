// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log("Enum - Color:", c);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log("Any - Not Sure:", notSure);

// Void
function warnUser(): void {
    console.log("This is a warning message");
}
warnUser();

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log("Null:", n);
console.log("Undefined:", u);

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
let obj: object = {name: "John", age: 30};
console.log("Object:", obj);

// We can assign a value of type unknown to a variable of type any
let val: unknown = "Revature";
let val1: unknown = val;
console.log(val1);
let val2: any = val;
console.log(val2);

function greet(person: {
  firstName: string,
  lastName: string,
}) {
  console.log(person.firstName);
  console.log(person.lastName);
}
greet({
  firstName: "Rachel",
  lastName: "Green",
})

interface Person {
  firstName: string;
  lastName: string;
}

function greet2(person: Person) {
  console.log(person.firstName);
  console.log(person.lastName);
}

greet2({
  firstName: "Rachel",
  lastName: "Green",
})