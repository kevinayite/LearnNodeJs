const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}
//module.exports = sum; //Make this function available everywhere
// The following is showing us how to import mutiple  at the same time
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

// An other way of exporting multiple at the same time
module.exports = {sum: sum, PI: PI, SomeMathObject: SomeMathObject}