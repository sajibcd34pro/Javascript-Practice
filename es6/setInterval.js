// let intervalId =
//     setInterval(function () {
//         console.log('hello world')
//     }, 5000);

// console.log('hello world3')
// The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().


// clearInterval(intervalId)

// let seconds = 0;

// const timeId = setInterval(() => {
    //     seconds++;
    //     console.log(seconds2);
    //     if (seconds > 3) {
        //         clearInterval(timeId);
        //     }
        // }, 1000)
        
        // console.log('second');
let seconds2 = 0;
        
        const timeIntervalId = setInterval(function () {
            // seconds += 1;
            // seconds2++;
            console.log(seconds2);
            if (seconds2++ ===7) {
                clearInterval(timeIntervalId);
            }
        }, 1000)