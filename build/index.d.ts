interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare function isBigObject(obj: unknown): obj is BigObject;
declare function hasKey<O>(obj: O, key: PropertyKey): key is keyof O;
declare function summ(a: BigObject): number;
declare const example: BigObject;
declare const example1: BigObject;
declare const example2: BigObject;
declare const example3: BigObject;
declare const example4: BigObject;
declare const example5: BigObject;
//# sourceMappingURL=index.d.ts.map