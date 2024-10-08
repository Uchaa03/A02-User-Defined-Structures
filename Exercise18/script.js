function calculateBasePrice(basePrice, discount) {
    // Check base price
    if (isNaN(basePrice) || basePrice <= 0) {
        throw new Error('The base price must be a positive number.');
    }

    //Check discounts
    if (!Array.isArray(discount) || discount.some(desc => isNaN(desc) || desc < 0 || desc > 100)) {
        throw new Error('Each discount must be a number between 0 and 100.');
    }

    //Apply discount with loop reduce
    const finalPrice = discount.reduce((actualPrice, discount) => {
        return actualPrice - (actualPrice * (discount / 100));
    }, basePrice);

    return finalPrice;
}

try {
    const basePrice = 100;
    const discount = [10, 20];
    const finalPrice = calculateBasePrice(basePrice, discount);

    //Round result
    console.log(`The final price after applying the discounts is: ${finalPrice.toFixed(2)}€`);
} catch (error) {
    console.error(error.message);
}