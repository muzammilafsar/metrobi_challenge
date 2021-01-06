function findMaxValueCapacity(carrotTypes, capacity) {
    let perKg = carrotTypes.map(val => ({...val, rate: val.price/val.kg})).sort((a,b) => {
        if(a.rate > b.rate) {
            return -1
        } else if(a.rate < b.rate) {
            return 1
        }
        return 0
    });
    let remainingCapacity = capacity % perKg[0].kg;
    let initialValue = ((capacity-remainingCapacity)/perKg[0].kg ) * perKg[0].price;
    for(let i = 1; i< perKg.length ; i ++) {
        if(remainingCapacity === 0) {
            break
        }
        if(perKg[i].kg <= remainingCapacity) {
            let lastCapacity = remainingCapacity;
            remainingCapacity = remainingCapacity % perKg[i].kg;
            initialValue = initialValue + ((lastCapacity-remainingCapacity)/perKg[0].kg ) * perKg[0].price;
        }
    }
    return {maxValue: initialValue}
}
console.log(findMaxValueCapacity([{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}],36));
console.log(findMaxValueCapacity([{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}, {kg: 2, price: 20}],38));