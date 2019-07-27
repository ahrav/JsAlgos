// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let rev_string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev_string += str[i];
  }
  return rev_string;
}

function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverse3(str) {
  let rev_string = '';
  for (let char of str) {
    rev_string = char + rev_string;
  }

  return rev_string;
}

function reverse4(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
module.exports = reverse2;
module.exports = reverse3;
module.exports = reverse4;
