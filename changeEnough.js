function changeEnough(arr,total){
    return Object.entries(arr).map(([a1, a2]) =>
            (parseInt(a1) * a2)).reduce((a,b) => a+b) >= total;
}

let change={
    '10' :5,
    '5':3,
    '2' :5,
    '1' :5
};
let total =65;
console.log(changeEnough(change, total));