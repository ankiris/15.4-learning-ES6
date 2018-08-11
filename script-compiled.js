'use strict';

console.log('Zadanie 1:');
var hello = 'Hello',
    world = 'World!';

var z = function z(hello, world) {
  return hello + ' ' + world;
};

console.log(z(hello, world));

console.log('Zadanie 2:');

var multi = function multi(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log(multi(4, 8));
console.log(multi(5));

console.log('Zadanie 3:');

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, arg) {
    return sum + arg;
  }) / args.length;
};
console.log('the average is: ' + average(1, 2, 3, 4, 5, 6, 8, 10));

console.log('Zadanie 4:');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

console.log('Zadanie 5:');

var data = [1, 4, "Iwona", false, "Nowak"];
var firstName = data[2],
    lastName = data[4];

console.log(firstName + ' ' + lastName);
