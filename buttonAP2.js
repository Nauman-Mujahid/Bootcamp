function addIntegers() {
    const input1 = document.querySelector('#input1').value;
    const input2 = document.querySelector('#input2').value;
    
    if (isNaN(input1) || isNaN(input2)) {
      throw new Error("Both Inputs must be a number");
    }
    
    return Number(input1) + Number(input2);
  }
  
  const submitButton = document.querySelector('#submitButton');
  submitButton.addEventListener('click', function() {
    try {
      const result = addIntegers();
      alert(`The result is: ${result}`);
    } catch (error) {
      alert(error.message);
    }
  });