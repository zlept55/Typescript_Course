const addd = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  }
  
  addd(5, 10, 'ninja');
  
  const minuss = (a: number, b: number): number => {
    return a + b;
  }
  
  let resultt = minuss(10,7);
  console.log(resultt);