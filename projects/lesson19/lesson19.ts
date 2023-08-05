type newType = string | number

function addNumberOrString(a: newType, b: newType) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b
    }
    if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a.concat(b)
    }
}
console.log('>>> check function: ', addNumberOrString('vo', ' phong'))