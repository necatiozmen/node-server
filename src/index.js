/* eslint-disable no-restricted-syntax */
import { myFunc2 } from './example';

console.log(myFunc2());

/* document.addEventListener(('click'), function event {
    console.log(event.target);
}, false) */

document.getElementById('button').onclick = function () {
  const paragraph = document.querySelector('h1');
  paragraph.textContent = 'This text has changed because you clicked the button.';
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

class Person {
  name = 'Siya Kapoor';

  fullname = () => this.name
}
const a = new Person();
const persondet = a.fullname();
console.log(`%c${persondet}`, 'font-size:25px;color:red;');

const sqr = 9 ** 2;
console.log(`%c${sqr}`, 'font-size:25px;color:red;');

const foo = ['PHP', 'C++', 'Mysql', 'JAVA'];
for (const i of foo) {
  console.log(i);
}

const { x, y, ...z } = {
  x: 1, y: 2, a: 3, b: 4,
};
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const str = 'abc';

console.log(str.padStart(8, '_'));
console.log(str.padEnd(8, '_'));
