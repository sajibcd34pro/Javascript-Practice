function deliveryCost(shirts) {
    if (shirt <= 100) {
        const firstDelivery = shirt * 100;
        return firstDelivery;
        
    }
    else if (shirt > 100 && shirt <= 200) {
        const firstDelivery = shirt * 100;  
        const secondDelivery = (shirt - 100) * 80;
        const totalCost = firstDelivery + secondDelivery;
        return totalCost;
    }

    else if (shirt > 200) {
        const firstDelivery = shirt * 100;
        const secondDelivery = (shirt - 100) * 80;
        const lastDelivery = secondDelivery * 50;
        const totalCost = firstDelivery + secondDelivery;
        return totalCost;
    }
}