//Напишіть програму, яка використовує for of, щоб пройтися по масиву чисел [5,12,33,2,17,28]і обчислити їх загальну суму.
const numbers = [5, 12, 33, 2, 17, 28];
let total = 0;

for (const number of numbers) {
  total += number;
}
console.log(total);
