export const myFunc = () => console.log('myFunc');

export const myFunc2 = () => {
  console.log('myFunc2');
};

export const notHoisted = () => {
  console.log('bar');
};
