// My interface!!!

// interface CvalueObj {
//   cvalue: undefined | string | number | ALikeObj;
// }

// interface ALikeObj {
//   [key: string]: undefined | CvalueObj;
// }

interface BigObject {
  [a: string]:
    | {
        cvalue: number | string | undefined | BigObject;
      }
    | undefined;
}

//summ :: BigObject → number

function isBigObject(obj: unknown): obj is BigObject {
  if (typeof obj === 'object' && obj) {
    const keys: string[] = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = (obj as BigObject)[key];
      if (
        typeof value === 'undefined' ||
        (typeof value === 'object' &&
          'cvalue' in value &&
          (typeof value['cvalue'] === 'string' ||
            typeof value['cvalue'] === 'number' ||
            typeof value['cvalue'] === 'undefined' ||
            isBigObject(value['cvalue'])))
      )
        return true;
    }
  }
  return false;
}

function summ(a: BigObject): number {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (elem === undefined) {
      return 0;
    }
    if (typeof elem.cvalue === 'string') {
      return Number.parseInt(elem.cvalue) || 2021;
    }
    if (isBigObject(elem.cvalue)) {
      return summ(elem.cvalue);
    }
    return elem.cvalue ?? 2021;
  });
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
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
        cvalue: { good: { cvalue: 3 } },
      },
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
        cvalue: { good: { cvalue: 3 } },
      },
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
      ha: {
        cvalue: { good: { cvalue: undefined } },
      },
    },
  },
};

const example4: BigObject = {
  hello: { cvalue: 1 },
  world: {
    cvalue: undefined,
  },
};

const example5: BigObject = {
  mobo: undefined,
  hello: { cvalue: 1 },
  world: {
    cvalue: {
      yay: { cvalue: '2' },
      grgr: { cvalue: undefined },
      grr: { cvalue: '1q' },
      qq: undefined,
    },
  },
  grgr: { cvalue: undefined },
};

console.log(summ(example));
console.log(summ(example1));
console.log(summ(example2));
console.log(summ(example3));
console.log(summ(example4));
console.log(summ(example5));
