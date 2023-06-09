// let greet: Function;

//example 1
let greet10: (a: string, b: string) => void;
greet10 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

//example 2
let calc10: (a: number, b: number, c: string) => number;

calc10 = (numOne: number, numtwo: number, action: string) => {
    if(action === "add"){
        return numOne + numtwo;;      
    }
    else{
        return numOne - numtwo;
    }
}

//example 3
let logDetails10: (obj: {name : string, age: number}) => void;

type person = {name: string, age: number};

logDetails10 = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
