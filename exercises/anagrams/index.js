// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  return (
    stringA
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
    stringB
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  );
}

function anagrams2(stringA, stringB) {
  let obj1 = {};
  let obj2 = {};

  stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB.replace(/[^\w]/g, '').toLowerCase();

  for (let char of stringA) {
    obj1[char] = obj1[char] + 1 || 1;
  }

  for (let char of stringB) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  return objectsHaveSameKeys(obj1, obj2);
}

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce(
    (keys, object) => keys.concat(Object.keys(object)),
    []
  );
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

module.exports = anagrams2;
