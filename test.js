function deliveryCost(shirt) {
    if (shirt <= 100) {
        const firstDelivery = shirt * 100;
        return firstDelivery;
        
    }
    else if (shirt > 100 && shirt <= 200) {
        const firstDelivery = shirt * 100;  
        let secondDelivery = (shirt - 100);
        const lastDelivery = firstDelivery - (secondDelivery *100);
        const totalCost = lastDelivery + (secondDelivery * 80);
        return totalCost;
    }

    else if (shirt > 200) {
        const firstTshirtDelivery = 100 * 100;
        const secondTshirtDelivery = 100 * 80;
        const thirdTshirtDelivery = (shirt - 200) * 50;
        const totalCost = firstTshirtDelivery + secondTshirtDelivery + thirdTshirtDelivery;
        return totalCost;
    }
    // else if (shirt > 200) {
    //     let firstTshirtQuantity =100; 
    //     let secondTshirtQuantity = 100; 
    //     let thirdTshirtQuantity = shirt - 200;
    //     const firstTshirtCost = firstTshirtQuantity * 100;
    //     const secondTshirtCost = secondTshirtQuantity * 80;
    //     const thirdTshirtCost = thirdTshirtQuantity * 50;
    //     const total = firstTshirtCost + secondTshirtCost + thirdTshirtCost;
    //     return total;
    // }
}

console.log(deliveryCost(201))