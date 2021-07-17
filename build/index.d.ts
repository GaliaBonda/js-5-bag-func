interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare const example: BigObject;
declare const example1: BigObject;
declare const example2: BigObject;
declare const example3: BigObject;
declare function isBigObject(obj: any): obj is BigObject;
declare function summ(a: BigObject): number;
//# sourceMappingURL=index.d.ts.map