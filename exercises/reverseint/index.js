// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n < 0) {
    return -Number(
      Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }
  return Number(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  );
}

function reverseInt2(n) {
  return (
    Math.sign(n) *
    parseInt(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  );
}

module.exports = reverseInt2;
