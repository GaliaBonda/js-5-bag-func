"use strict";
// My interface!!!
//summ :: BigObject → number
function isBigObject(obj) {
    // if (typeof obj === 'object' && obj) {
    //   const objField: string = Object.keys(obj)[0];
    //   const innerObj = (obj as BigObject)[objField];
    //   if (innerObj) return 'cvalue' in innerObj;
    // }
    // return false;
    if (typeof obj === 'object' && obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            //if (hasKey(obj, key)) {
            const value = obj[key];
            //as BigObject
            if (typeof value === 'undefined' ||
                (typeof value === 'object' &&
                    'cvalue' in value &&
                    (typeof value['cvalue'] === 'string' ||
                        typeof value['cvalue'] === 'number' ||
                        typeof value['cvalue'] === 'undefined' ||
                        isBigObject(value['cvalue']))))
                return true;
            //}
        }
    }
    return false;
}
// function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
//   return key in obj;
// }
function summ(a) {
    const x = Object.keys(a).map((k) => {
        var _a;
        const elem = a[k];
        if (elem === undefined) {
            return 0;
        }
        if (typeof elem.cvalue === 'string') {
            return Number.parseInt(elem.cvalue) || 2021;
        }
        // if (typeof elem.cvalue === 'object')
        //   return summ(elem.cvalue);
        if (isBigObject(elem.cvalue)) {
            return summ(elem.cvalue);
        }
        return (_a = elem.cvalue) !== null && _a !== void 0 ? _a : 2021;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
const example = {
    hello: { cvalue: 1 },
    world: {
        cvalue: { yay: { cvalue: '2' } },
    },
};
const example1 = {
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
const example2 = {
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
const example3 = {
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
const example4 = {
    hello: { cvalue: 1 },
    world: {
        cvalue: undefined,
    },
};
const example5 = {
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
//# sourceMappingURL=index.js.map