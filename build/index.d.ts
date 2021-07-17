interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare const example: BigObject;
declare const example1: BigObject;
declare const example2: BigObject;
declare const example3: BigObject;
declare const example4: BigObject;
declare const example5: BigObject;
declare function isBigObject(obj: unknown): obj is BigObject;
declare function summ(a: BigObject): number;
//# sourceMappingURL=index.d.ts.map