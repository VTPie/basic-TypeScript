const sum29 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}