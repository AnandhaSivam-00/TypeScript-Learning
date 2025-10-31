// Boolean
let isDone: boolean = false;
console.log("Boolean:", isDone);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Number - Decimal:", decimal);
console.log("Number - Hex:", hex);
console.log("Number - Binary:", binary);
console.log("Number - Octal:", octal);

// String
let color: string = "blue";
color = 'red';
let fullName: string = `John Doe`;
let age: number = 30;
let sentence: string = `Hello, my name is ${ fullName }.
I'm ${ age } years old.`;
console.log("String - Color:", color);
console.log("String - Full Name:", fullName);
console.log("String - Sentence:", sentence);

// Array
let list: number[] = [1, 2, 3];
let genericList: Array<number> = [1, 2, 3];
console.log("Array - Number List:", list);
console.log("Array - Generic Number List:", genericList);

// Tuple
let x: [string, number];
x = ["hello", 10];
console.log("Tuple - String and Number:", x[0], x[1]);