String.prototype.hasVowel = function (){
    return ['a', 'e', 'i', 'o', 'u'].some(e => this.toLowerCase().includes(e))
};

String.prototype.isDigit = function (){
    if(this.length === 0) return false;
    return !Number.isNaN(Number(this));
};

String.prototype.isQuestion = function (){
    return this.includes('?');
};

String.prototype.toCurrency = function (currency){
    if (this.isDigit()) {
        return currency === undefined ? '$ ' + this : currency + " " + this;
    }
    return NaN;
};

String.prototype.fromCurrency = function (){
    let temp = this.replace(',', '');
    temp = temp.match(/(\d+)/g);
    let word = this.replace(',', '').toLowerCase().match(/([a-z]+)/g); 
    if (temp === null || (word !== null && word.length > 1)) {
        return "";
    }
    console.log()
    return temp.length === 1 ? temp[0] : '';
};

String.prototype.selectNumbers = function (){
    let temp = this.replace(',', '');
    temp = temp.match(/(\d+)/g);
    if (temp === null) {
        return "";
    }
    return temp.join("");
};
