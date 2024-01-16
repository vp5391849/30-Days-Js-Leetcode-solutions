//I had problem while solving this i took help of chatgpt and internet and learned this concept 
// I have to mention the important concept to study which I am myself studying nowadays you should also try
// Learning Resources:
// Caching and Expiration:

// Wikipedia - Cache Algorithms
// Understanding Caching in Computer Science

// JavaScript Classes and Prototypes:

// MDN Web Docs - Classes
// MDN Web Docs - Inheritance and the prototype chain

// Asynchronous JavaScript (for handling time):

// MDN Web Docs - Asynchronous programming
// JavaScript Promises: An Introduction

// YouTube Channels:

// The Net Ninja
/*Write a class that allows getting and setting key-value pairs, 
however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key,
 an integer value, and a duration in milliseconds. 
 Once the duration has elapsed, the key should be inaccessible.
 The method should return true if the same un-expired key already 
 exists and false otherwise. Both the value and duration should be
 overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. 
Otherwise it should return -1.

count(): returns the count of un-expired keys. */


var TimeLimitedCache = function() {
    this.data = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let currentTime = Date.now()
    let expirationTime = currentTime + duration
     
     if(this.data[key] && this.data[key].expirationTime > currentTime){
         this.data[key]= {value, expirationTime}
         return true
     }else{
         this.data[key] = {value,expirationTime}
         return false
     }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    // here we get the value for the as we have set in the above function
    const currentTime = Date.now() //this returns the time in milliseconds
    if(this.data[key] && this.data[key].expirationTime > currentTime){
        return this.data[key].value
    }else{
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    const nonExpiredKeys = Object.keys(this.data).filter((key) => {
        return this.data[key].expirationTime > currentTime;
    });
    return nonExpiredKeys.length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
 