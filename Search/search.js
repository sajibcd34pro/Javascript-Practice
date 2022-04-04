// search matching products using includes method

const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 32000 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'bosundhara binding paper', price: 80 },
    { name: 'lg smart phone', price: 10000 },
    { name: 'old granny land phone', price: 100 },
    { name: 'samsung watch', price: 1000 },
    { name: 'Dell laptop', price: 31000 },
    { name: 'lenovo laptop', price: 41000 },
]

//using for loop

// for (let i = 0; i < products.length; i++) {
//     const element = products[i];
//     if (element.name.includes('laptop') ) {
//         console.log(products[i]);
//     }
    
// }

//include method is case sensitive .
// function searchProduct(elements, searchText) {
//     const result = [];

//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];
//         if (element.name.includes(searchText)) {
//            result.push(element);
//         }

//     }
//     return result;
// }

// const search = searchProduct(products, 'watch');
// console.log(search);

//for loop continue or skip . module 23




// for (const product of products) {
//     if (product.price < 10000) {
//         break;
//     }
//     console.log(product);
// }
// let product2= []
// for (const product of products) {
//     if (product.price < 10000) {
//         // console.log('skype');
//         // continue;
//     }
//    console.log(product);
// //   console.log(product2);
// }
