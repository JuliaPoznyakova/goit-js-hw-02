let input;
const nums = [];
let total = 0;
while (input = prompt ("Введите число")){
  nums.push(input);
}
if (nums.length){
  for (let number of nums){
    total += +number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}


