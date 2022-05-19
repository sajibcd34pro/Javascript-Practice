// const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };

// const fishPhone = fish.phone;
// const price = fish.price;

//shortcut array
// const { id, name, price, address, phone, dress } = fish;
// console.log();

// const { id, name, price, address, phone, dress } = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };
// console.log(name);


const company = {
    names: 'GP',
    ceo: { id: 1, names: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
const companyName = company.names;
// or
const {id, names , food } = company.ceo
// console.log(ceo.id);
console.log(id, names, food);

const { first } = company.web.tech
console.log(first);

//array destructuring
const [rupoma, nusrat] = [89, 45];
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log('myObject.p', myObject?.p?.q);