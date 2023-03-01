const findLongestWord = function (string) {
  const array = string.split(' ');
  console.log(array);

  let longesWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (longesWord.length < array[i].length) {
      longesWord = array[i];
    }
  }

  return longesWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
