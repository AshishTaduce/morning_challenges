const validateIpAddress = (ip) =>
        ip.split(".").length === 4
        && ip.split(".").every(addressIsValid);

const addressIsValid = (address) => parseInt(address[0]) !== 0 && (0 <= address && address <= 255);
