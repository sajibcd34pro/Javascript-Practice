// Infinity loop using for loop 
for (; ;) {
    var rand = Math.trunc(Math.random() * 10 + 1);
    if (rand === 6) {
        console.log('winner winner chicken dinner');
        break;
    } else {
        console.log('you have got', rand);
    }
}