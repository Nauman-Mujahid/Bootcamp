// const counterFunc = counter => counter > 100 ? 0 : counter + 1;

const counterFunc = counter =>  ( counter > 100 ? counter = 0 : counter++, counter-1 )

console.log(counterFunc(8))