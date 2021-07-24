function calculator (str){
    console.log(str)
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


if(process.argv.length > 2) {
    console.log(process.argv)
    if(process.argv.length === 4) {
        calculator(process.argv[3].split("=")[1])
    }
    else {
        calculator(process.argv[2])
    }
}
