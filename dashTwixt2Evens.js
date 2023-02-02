const dashTwist2Evens = num => {
  const str = num.toString();
    let result = '';
      for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (parseInt(str[i]) % 2 === 0 && parseInt(str[i + 1]) % 2 === 0) {
          result += '-';
        }
      }
            return result;
};

console.log(dashTwist2Evens(124546565324));
