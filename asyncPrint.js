function printAsync(arr) {
    arr.forEach((item, i) => {
        setTimeout(()=> console.log(item, Math.pow(2,i)), 1000 * Math.pow(2,i))
    })
    return ''
}
console.log(printAsync(['a','b','c','d']))