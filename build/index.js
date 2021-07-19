"use strict";
// My interface!!!
//summ :: ALikeObj → number
function isBigObject(obj) {
    if (typeof obj === 'object' && obj) {
        const objField = Object.keys(obj)[0];
        const innerObj = obj[objField];
        if (innerObj)
            return 'cvalue' in innerObj;
    }
    return false;
}
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (elem === undefined) {
            return 0;
        }
        if (elem.cvalue === undefined) {
            return 2021;
        }
        if (typeof elem.cvalue === 'string') {
            return Number.parseInt(elem.cvalue) || 2021;
        }
        if (typeof elem.cvalue === 'number')
            return elem.cvalue;
        if (isBigObject(elem.cvalue)) {
            return summ(elem.cvalue);
        }
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