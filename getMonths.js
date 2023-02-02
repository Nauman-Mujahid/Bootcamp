// function getMonth(month) {
//     const months = ['Jan', 'jan', 'Feb', 'feb', 'Mar', 'mar', 'Apr','apr', 'May', 'may', 'Jun','jun', 'Jul', 'jul', 'Aug', 'aug', 'Sep', 'sep', 'Oct', 'oct', 'Nov', 'nov', 'Dec',  'dec'];
//     if (!months.includes(month)) {
//       throw new Error("Invalid month");
//     }
//     return month;
//   }

//   const submitButton = document.querySelector('#submitButton');
//   submitButton.addEventListener('click', function() {
//     try {
//       const input = document.querySelector('#monthInput').value;
//       const result = getMonth(input);
//       document.querySelector('#result').textContent = `The month is: ${result}`;
//     } catch (error) {
//       document.querySelector('#result').textContent = error.message;
//     }
//   });

function getMonth(month){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months.indexOf(month) === -1){
        throw new Error("First Letter of the Month is Captial");
    }
    return month;
}

const btn = document.querySelector('#submitButton');
btn.addEventListener('click', function(){
    try{
        const input = document.querySelector('#monthInput').value;
        const result = getMonth(input);
        document.querySelector('#result').textContent = `The Month is: ${result}`;
    } 
    catch (e){
        document.querySelector('#result').textContent = e.message;
    }
});