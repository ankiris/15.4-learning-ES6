'use strict';
console.log('Zadanie 1:');
const hello = 'Hello', world = 'World!';

const z = (hello,world) => `${hello} ${world}`;

console.log(z(hello,world));

console.log('Zadanie 2:');

const multi = (x, y = 1) => x * y;

console.log(multi(4,8));
console.log(multi(5))

console.log('Zadanie 3:');

const average = (...args) => args.reduce((sum, arg) => sum + arg)/ args.length;
console.log('the average is: '+average(1,2,3,4,5,6,8,10));

console.log('Zadanie 4:');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

console.log('Zadanie 5:');

const data = [1, 4, "Iwona", false, "Nowak"];
const [, , firstName, , lastName] = data;
console.log(`${firstName} ${lastName}`);