"use strict";
// My interface!!!
// interface CvalueObj {
//   cvalue: undefined | string | number | ALikeObj;
// }
const example = {
    hello: { cvalue: 1 },
    world: {
        cvalue: { yay: { cvalue: '2' } },
    },
};
console.log(example);
console.log(typeof example);
//summ :: ALikeObj → number
function isBigObject(obj) {
    return Object.keys(obj)[0] in obj;
}
function summ(a) {
    const x = Object.keys(a).map(k => {
        const elem = a[k];
        if (elem === undefined)
            return 2021;
        if (elem !== undefined && typeof elem.cvalue === 'string')
            return Number.parseInt(elem.cvalue) || 2021;
        if (elem !== undefined &&
            elem.cvalue !== undefined &&
            typeof elem.cvalue !== 'string' &&
            typeof elem.cvalue !== 'number' &&
            isBigObject(elem.cvalue) !== undefined) {
            return summ(elem.cvalue);
        }
        if (elem !== undefined && typeof elem.cvalue === 'number')
            return elem.cvalue;
    });
    //console.log(x);
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(summ(example));
//# sourceMappingURL=index.js.map