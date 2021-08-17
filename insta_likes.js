let instaLikes = (simps) => {
    let temp;
    switch (simps.length) {
        case 1:
            return simps.toString() + " likes you";
        case 2:
        case 3:
            temp = simps.pop();
            return simps.join(", ") + ` and ${temp} likes you`;
        default:
            temp = simps.length - 2;
            return simps.slice(0,2).join(", ") + ` and ${temp} others likes you`;
    }
}
console.log(instaLikes(["Ted", "Flanders", "Homer", "Simpsons", "Simpsons"]))
