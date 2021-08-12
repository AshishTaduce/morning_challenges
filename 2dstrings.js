function generateString (arr, target){
    let activeRow = -1;
        return target.split("").every(e => {
            activeRow = activeRow === arr.length - 1 ? 0 : activeRow + 1;
            if (arr[activeRow].includes(e)) {
                arr[activeRow].splice(arr[activeRow].indexOf(e), 1);
                return true;
            }
            return false;
        });
}

console.log(generateString([
    ['a', 'b', 'a'],
    ['x', 'y', 'z'],
    ['b', 'd', 'r'],
], "axbaydbzra"));
