let greet1: Function;

greet1 = () => {
    console.log("hello, again");
}

const add1 = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add1(5,10, '20');

const minus1 = (a: number, b:number): number  => {
    return a + b;
}

let result1 = minus1(10,7);
