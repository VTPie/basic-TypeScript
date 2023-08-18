function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b
}
console.log('>>> add new: ', addNew(6, 9), addNew("vo", "phong"))