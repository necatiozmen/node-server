"use strict";

var _example = require("./example.js");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("Webpack Project 2");
console.log(_example.val);
/* document.addEventListener(('click'), function event {
    console.log(event.target);
}, false) */

document.getElementById("button").onclick = function () {
  var paragraph = document.querySelector("h1");
  paragraph.textContent = "This text has changed because you clicked the button.";
};
/* export const myFunc = () => {
  const paragraph = document.querySelector("h1");
  paragraph.textContent =
    "This text has changed because you clicked the button.";
}; */

/* var  {...x} = z; */

/* class Person {
  constructor(fname, lname, age, address) {
     this.fname = fname;
     this.lname = lname;
     this.age = age;
     this.address = address;
  }

  get fullname() {
     return this.fname + "-" + this.lname;
  }
}
var a = new Person("Siya", "Kapoor", "15", "Mumbai");
var persondet = a.fullname; */


var Person = function Person() {
  var _this = this;

  _classCallCheck(this, Person);

  _defineProperty(this, "name", "Siya Kapoor");

  _defineProperty(this, "fullname", function () {
    return _this.name;
  });
};

var a = new Person();
var persondet = a.fullname();
console.log("%c" + persondet, "font-size:25px;color:red;");
var sqr = Math.pow(9, 2);
console.log("%c" + sqr, "font-size:25px;color:red;");
var foo = ["PHP", "C++", "Mysql", "JAVA"];

for (var _i = 0, _foo = foo; _i < _foo.length; _i++) {
  var i = _foo[_i];
  console.log(i);
}

var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

console.log(x); // 1

console.log(y); // 2

console.log(z); // { a: 3, b: 4 }

var str = 'abc';
console.log(str.padStart(8, '_'));
console.log(str.padEnd(8, '_'));
