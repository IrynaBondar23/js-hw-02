//Напишіть скрипт, який перевіряє наявність в масиві ["Pyton", "C++", "C#","PHP"] значення "Java Script".
//Якщо в масиві такого значення немає вивести в консоль "Значення Java Script в списку немає, додаємо в масив".
//Після чого додати "Java Script" в кінець масиву.

const list = ["Pyton", "C+", "C#", "PHP"];
const findItem = "Java Script";
let message = "Значення Java Script в списку немає, додаємо в масив";

if (!list.includes(findItem)) {
  console.log(message);
  list.push(findItem);
}
console.log(list);
