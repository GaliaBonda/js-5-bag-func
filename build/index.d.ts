interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare const example: BigObject;
declare function isBigObject(obj: object): obj is BigObject;
declare function summ(a: BigObject): number;
//# sourceMappingURL=index.d.ts.map