function printNumber(num, time) {
    return new Promise((res, rej) => {
        setTimeout(()=> console.log(num, time), 1000 * time )
    })
}
function printAsync(arr) {
    arr.forEach(async (item, i) => {
        await printNumber(item, Math.pow(2,i))
    })
}
console.log(printAsync(['a','b','c','d']));
