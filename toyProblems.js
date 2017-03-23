//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (string) {
    return string.split("").reverse().join("");
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function (array) {
    return array.filter((elem, index) => {
      return array.indexOf(elem) === index;
    });
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (string) {
    return string.split(" ").map((elem) => {
      return elem[0].toUpperCase() + elem.slice(1);
    }).join(" ");
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function (string) {
    let count = 0;
    let vowels = 'aeiou';
    string.toLowerCase().split("").forEach((elem) => {
      if (vowels.indexOf(elem) !== -1)++count;
    })
    return count;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
        return true;
      }
    }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined

}
