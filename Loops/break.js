while (true) {
    var isRand = Math.trunc(Math.random() * 10 + 1);
    if (isRand === 9) {
        console.log('attackers win , we are valorant');
        break;
    } else {
        console.log('defeated');
    }
}