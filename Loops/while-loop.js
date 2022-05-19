// let roastGiven = 0;

// while (condition) {
//     while () {
        
//     }
// }

// while (roastGiven < 7) {
//     console.log('Roast den, plz', roastGiven);
//     roastGiven++;
//     console.log(roastGiven);
// }

// if random number === 9 winner chicken dinner will be printed.
/*syntex of while loop 
while(condition ){

}
if condition will be true our loop will be execute.
*/

let isRunning = true;

while (isRunning) {
    let rand = Math.trunc(Math.random() * 10);
    if (rand === 9) {
        console.log('winner chicken dinner')
        isRunning = false;
    } else {
        console.log('you got', rand)
    }
}