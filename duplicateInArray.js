// function findDuplicate(arr){
//     let reducedArray = arr.reduce((acc, val) => {
//         if(!!acc[val]) {
//             acc[val] = acc[val] + 1;
//         } else {
//             acc[val] = 1
//         }
//         return acc
//     },{});
//     let duplicates = [];
//     for(const item in reducedArray) {
//         if(reducedArray[item] > 1) {
//             duplicates.push(item)
//         }
//     }
//     return duplicates
// }
// console.log(findDuplicate([1,1,1,2,2,2,3,4,5,5,6,7,7, -1,-1, 0,0,-100,-100]));

function findDuplicate(arr){
    let myset = new Set;
    let duplicates = new Set;
    for(const item of arr) {
        if(!myset.has(item)) {
            myset.add(item)
        } else {
            duplicates.add(item)
        }
    }
    return [...duplicates]
}

console.log(findDuplicate([1,1,1,2,2,2,3,4,5,5,6,7,7, -1,-1, 0,0,-100,-100]));
