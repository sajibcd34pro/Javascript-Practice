const getRedButton = document.getElementById('make');
getRedButton.onclick = makeRed;

function makeRed() {

    document.body.style.background = 'red';
}


function makeBlue() {
    document.body.style.background = 'blue';
}

const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


const pinkButton = document.getElementById('makePink');
// console.log(pinkButton);

// pinkButton.onclick = function makeBlue() {
//     document.body.style.background = 'pink';
// }
// in this case or you can write function without function name its called anonymous function . example below down here

// pinkButton.onclick =  () => {
//     document.body.style.background = 'skyblue';
// }
// or 
pinkButton.onclick = () => {
    document.body.style.background = 'hotpink';
}
//explore addEventListener

const goldenButton = document.getElementById('make-goldenrod');
// console.log(goldenButton);
goldenButton.addEventListener('click', makeGolder)
function makeGolder() {
    document.body.style.background = 'goldenrod'
}

//or,
// goldenButton.addEventListener('click', () => {
//     document.body.style.background = 'goldenrod'
// })

// or
// goldenButton.addEventListener('click', function () {
//     document.body.style.background = 'goldenrod'
// })

//or
// const makeGolder = () => {
//     document.body.style.background = 'goldenrod'
// }

// goldenButton.addEventListener('click', makeGolder)

// for direct | note: addEventListener is inbuilt function of js 

document.getElementById('make-orange').addEventListener('click', () => {
    document.body.style.background = 'orange';
})


