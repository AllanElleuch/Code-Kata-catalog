
// Short Solution
function solution(roman: string): number {
  // complete the solution by transforming the 
  // string roman numeral into an integer  
  let res: number = 0;
  let previousLetter: string = undefined;
  for (let index = 0; index < roman.length; index++) {
    const letter = roman[index];

    let functionToUse = mapValue.get(letter)
    if (functionToUse) res += functionToUse(index, roman);


  }
  return res
}

function handleI() {
  return 1
}

function handleV(index: number, roman: string) {
  let letterBefore = roman[index - 1]
  if (letterBefore === 'I') {
    return 3
  }
  else return 5
}

function handleX(index: number, roman: string) {
  let value = 10;

  let letterBefore = roman[index - 1]
  if (letterBefore === 'I') {
    return value - 2
  }
  else return 10
}

function handleM(index: number, roman: string) {
  let value = 1000;

  let letterBefore = roman[index - 1]
  if (letterBefore === 'I') {
    return value - 2
  }
  else return value
}

function handleD(index: number, roman: string) {
  let value = 500;
  let letterBefore = roman[index - 1]
  if (letterBefore === 'I') {
    return 8
  }
  else return 500
}

function handleC(index: number, roman: string) {
  let value = 100;

  let letterBefore = roman[index - 1]
  if (letterBefore && letterBefore === 'I') {
    return value - 2
  }
  else return value
}
function handleL(index: number, roman: string) {
  let value = 50;

  let letterBefore = roman[index - 1]
  if (letterBefore && letterBefore === 'I') {
    return value - 2
  }
  else return value
}
interface Dictionary<T> {
  [Key: string]: T;
}

let mapValue: Map<string, Function> = new Map;
mapValue.set('I', handleI);
mapValue.set('V', handleV);
mapValue.set('X', handleX);
mapValue.set('M', handleM);
mapValue.set('D', handleD);
mapValue.set('C', handleC);
mapValue.set('L', handleL);


module.exports = solution
