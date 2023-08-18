function multiply31(n: number, ...m: number[]) {
    let a = [1, 2, 3, 4].map((x) => {
        console.log("check x = ", x)
        return n * x
    });
    return m.map((x) => n * x);
}