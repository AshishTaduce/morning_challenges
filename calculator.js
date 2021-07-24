function calculator (str){
    console.log(process.argv)
    try {
        let result = (eval(str));
        if (Number.isInteger(result)) {
            return result;
        }
        return Number(result.toFixed(8).toString());
    }
    catch (err){
        return "Invalid Expression"
    }
}
// console.log(calculator("9/7") );// 1.28571429
