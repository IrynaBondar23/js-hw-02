//Напишіть скрипт, якй приймає масив чисел [23,1,45,87,4,55,6], використовуючи for of для пошуку найбільшого числа в масиві.
const numbers = [23, 1, 45, 87, 4, 55, 6];
let maxNumber = numbers[0];

for (const number of numbers) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(maxNumber);
