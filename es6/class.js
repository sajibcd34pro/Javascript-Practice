// to create same kinds of objects we use class. commonly class name start from upperCase.
//example of class
// never use function keyword in class . you should use function directly with function name
//if you want to se a property of object in class use this keyword ins of constructor
class Support {
    names;
    role = 'support web dev';
    address = 'Bangladesh';
    constructor(name,address) {
        this.names = name;
        // this.address = 'Dubai'
        this.address = address;

    }
    startSessions() {
        // console.log('Start  support sessions')
        console.log(this.names ,'Start a support sessions')
    }

}
// console.log(Support);
//create object from class.

// const Aamir = new Support;
// const salman = new Support;
// console.log(salman)

const Sajib = new Support('Md. Sajib', 'Dubai');
const Sojol = new Support('Md Sojol', 'Arab');
Sojol.startSessions();
console.log(Sojol)