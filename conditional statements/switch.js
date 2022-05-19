// 0 - sunday , 1- monday , 2 - tuesday , 3- wednesday

let date = new Date();
let today = date.getDay();

switch (today) {
    case 0: console.log('today is sunday');
        break;
    case 1: console.log('today is monday');
        break;
    case 2: console.log('today is tuesday');
        break;
    case 4: console.log('today iS wednesday');
        break;
    case 5: console.log('today iS thursday');
        break;
    case 6: console.log('today iS friday')
        break;
    case 7: console.log('today iS saturday');
    default: console.log('not a valid number')
}