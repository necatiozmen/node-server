export var myFunc = () => console.log("myFunc") 

export const myFunc2 = function() { console.log("myFunc2")}

export var notHoisted = function() {
    console.log('bar');
 };

