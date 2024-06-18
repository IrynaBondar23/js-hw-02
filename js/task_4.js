//У вас є масив ["1-Pyton", "2-C++", "3-C#","4-PHP"]. В результаті вам потрібно отримати ["Pyton", "C++", "C#","PHP"]
const list = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];

for (let i = 0; i < list.length; i += 1) {
  const newItem = list[i].slice(2);
  list[i] = newItem;
}
console.log(list);
