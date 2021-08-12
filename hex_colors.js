function getHexCode (rgb){
    rgb = Object.values(rgb);
    if (rgb.every(e => 0 <= e <= 255))
    return "#" + rgb.map(e => e.toString(16)).join('');
    else return "Invalid values";
}

console.log(getHexCode({red: 255, green: 153, blue: 51}));
