function calculator (str){
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


if(process.argv[2] != undefined) {
    console.log(calculator(process.argv[2]))
}
