function getShippingCost(country) {
    let price;
    const normalizedCountry = country.toLowerCase();
    switch (normalizedCountry) {
        case 'china':
            price = 100;
            break;
        case 'chile':
            price = 250;
            break;
        case 'australia':
            price = 170;
            break;
        case 'jamaica':
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
    const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    return `Shipping to ${formattedCountry} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
