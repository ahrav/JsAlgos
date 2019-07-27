// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCount = {};
  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  return Object.keys(charCount).reduce((a, b) =>
    charCount[a] > charCount[b] ? a : b
  );
}

module.exports = maxChar;
