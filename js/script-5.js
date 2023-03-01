const checkForSpam = function (message) {
  let check;
  const letter = message.toLowerCase();
  if (letter.includes('spam') || letter.includes('sale')) {
    check = 'true';
  } else {
    check = 'false';
  }
  return check;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
