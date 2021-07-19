function findNearestVowel (char){
    let smallestDiff = Infinity;
    let currentDiff;
    let vowels = [
        "a".charCodeAt(0),
        "e".charCodeAt(0),
        "i".charCodeAt(0),
        "o".charCodeAt(0),
        "u".charCodeAt(0),
    ];
    let result = vowels[0];
    for (let entry of vowels) {
        currentDiff = Math.abs(entry - char.charCodeAt(0));
        if(currentDiff < smallestDiff) {
            smallestDiff = currentDiff;
            result = entry;
        }
    }
    return String.fromCharCode(result);
}

console.log(findNearestVowel('p'));