const arrayAverage = (arr) => {
    let sum = 0;
     for(var number of arr){
        sum += number;
     }
     return sum / arr.length;
}

const array = [10, 5, 20, 10, 25];
console.log(arrayAverage(array));