function encode(str){
    return str.split(" ")
        .map(word => makeReplacement(word))
        .join(" ");
}

function makeReplacement(word){
    let vowels = ['a','e','i','o','u'];
    if(vowels.includes(word[0])) {
        return word + "way";
    }
    let vowelIndex = word.split("").findIndex(letter => ['a','e','i','o','u'].includes(letter));
    return word.substring(vowelIndex) + word.substring(0, vowelIndex) + 'ay'
}

console.log(encode("this is english language")); // "isthay isway englishway anguagelay"

console.log(encode("wall street journal"));// "allway eetstray ournaljay"