// My interface!!!
// interface CvalueObj {
//   cvalue: undefined | string | number | ALikeObj;
// }

// interface ALikeObj {
//   [key: string]: undefined | CvalueObj;
// }

// const example: ALikeObj = {
//   hello: { cvalue: 1 },
//   world: {
//     cvalue: { yay: { cvalue: '2' } },
//   },
// };

interface BigObject {
  [a: string]:
    | {
        cvalue: number | string | undefined | BigObject;
      }
    | undefined;
}

const example: BigObject = {
  hello: { cvalue: 1 },
  world: {
    cvalue: { yay: { cvalue: '2' } },
  },
};

const example1: BigObject = {
  hello: { cvalue: 1 },
  world: {
    cvalue: { yay: { cvalue: '2' } },
    },
  again: {
      cvalue: {
          yay: {
              cvalue:
                  { good: { cvalue: 3 } }
          }
      },
  },
};

const example2: BigObject = {
  hello: { cvalue: 1 },
  world: {
    cvalue: { yay: { cvalue: 'gg' } },
    },
  again: {
      cvalue: {
          yay: {
              cvalue:
                  { good: { cvalue: 3 } }
          }
      },
  },
};

const example3: BigObject = {
  hello: { cvalue: 1 },
  world: {
    cvalue: { yay: { cvalue: 'gg' } },
    },
  again: {
      cvalue: {
          yay: {
              cvalue:
                  { good: { cvalue: undefined } }
          }
      },
  },
};

const example4: BigObject = {
  hello: { cvalue: 1 },
  world: {
    cvalue: undefined,
    }
};

//console.log(example);
//console.log(typeof example);

//summ :: ALikeObj → number

function isBigObject(obj: any): obj is BigObject {
    let objField: string = Object.keys(obj)[0];

    return obj[objField]['cvalue'] !== undefined;
}

function summ(a: BigObject): number {
  const x = Object.keys(a).map(k => {
    const elem = a[k];
    if (elem === undefined || elem.cvalue === undefined) return 2021;
    if (elem !== undefined && typeof elem.cvalue === 'string')
        return Number.parseInt(elem.cvalue) || 2021;
    if (
      elem !== undefined &&
      elem.cvalue !== undefined &&
      typeof elem.cvalue !== 'string' &&
      typeof elem.cvalue !== 'number' &&
      isBigObject(elem.cvalue) !== undefined
    ) {
      return summ(elem.cvalue as BigObject);
    }
    if (elem !== undefined && typeof elem.cvalue === 'number')
      return elem.cvalue;
  });
  //console.log(x);
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i] as number;
  }
  return sum;
}

console.log(summ(example));
console.log(summ(example1));
console.log(summ(example2));
console.log(summ(example3));
console.log(summ(example4));
