// this is a very easy question for you here you just need an approach to check for the keys of
// given object :)
/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  let keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
};
