//explicit types
let character5: string ;
let age5: number;
let isLoggedIn5: boolean;

// age = 'luigi';
age5 = 30;

// isLoggedIn = 25;
isLoggedIn5 = true;

//arrays
let ninjas5: string[] = [];

ninjas5.push('shaun');

//union types
let mixed5: (string|number|boolean )[] = [];
mixed5.push('hello');
mixed5.push(20);
mixed5.push(false);
console.log(mixed5);

let uid5: string|number;
uid5 = 123;
uid5 = "123";

//objects
let ninjaOne5: object;
ninjaOne5 = {name: 'yoshi',age:30};

let ninjaTwo5: {
  name5: string,
  age5: number,
  beltColour5: string
};

ninjaTwo5 = { name5: 'ken', age5: 20, beltColour5: 'black' };