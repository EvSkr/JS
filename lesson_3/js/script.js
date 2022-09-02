"use strict";
// Task_1  С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let num = 0;
while (num <= 100) {
  let check = true;
  for (let i = 2; i < num; i++) {
    if (num%i === 0) {
      check = false;
      break;
    }
  }
if (check) console.log(num);
  num++;
}

// Task_2  С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


let basket = [
  {
      product: "яблоко",
      qty: 2,
      price: 10
  },
  {
      product: "дыня",
      qty: 3,
      price: 10
  },
  {
      product: "лимон",
      qty: 4,
      price: 10
  },
  {
      product: "банан",
      qty: 1,
      price: 10
  }
];
let basketPrice = 0;
for (let goods of basket){
    basketPrice += goods.price * goods.qty;
    console.log("Товар " + goods.product + " стоит: " + goods.price * goods.qty);
}

console.log("Стоимость корзины: " + basketPrice + " руб.");

function countBasketPrice(basket) {
  let goodBasketPrice = 0;
  for (let goods of basket){
      goodBasketPrice += goods.price * goods.qty;
  }
  return goodBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " руб.");



// Task_3  Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (let i = 0; i <= 9; i++) {
  console.log(i)
}

// Task_4  *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let result = '';
const length = 21;

for (let i = 1; i < length; i++) {
  for(let j = 0; j < i; j++) {
    result += "*";
  }
  result += '\n';
}
console.log (result);