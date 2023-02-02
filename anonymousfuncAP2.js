const mean = (items) => {
    let sum = 0;
    for(const item of items){
        sum = sum + item;
    }
    return sum / items.length;
}

const number = [1,2,3,4,5,6];
console.log(mean(number));




// ●	Convert the following JavaScript function declaration to arrow function syntax.

// const counterFunc = counter => counter > 100 ? 0 : counter + 1;


// const counterFunc = (counter) => {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
     
//     return counter;
//   }



// ●	Write a function that would allow you to do this. (Use closures)

// function createBase(baseNumber) {
//   return function(numToAdd) {
//     return baseNumber + numToAdd;
//   };
// }

// var addSix = createBase(6);
// console.log(addSix(10)); // returns 16
// console.log(addSix(21)); // returns 27
