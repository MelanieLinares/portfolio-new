// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");








const target = document.querySelectorAll('h2');


target.forEach(
    function(currentValue, currentIndex, listObj) {

      // create new element
const elem = document.createElement('span');

elem.className ="backgroundBeforeElement";


// insert the element before target element
target[currentIndex].before(elem);
    },
    'myThisArg'
  );
