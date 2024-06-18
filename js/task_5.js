//Напиши скрипт, який рахує суму елементів двох масивів.

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;
const newArrey = array1.concat(array2);

console.log(newArrey);

for (const number of newArrey) {
  total += number;
}
console.log(total);
