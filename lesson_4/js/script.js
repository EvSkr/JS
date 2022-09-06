"use strict";
// Task_1  Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function numToObj(num){
  if (num < 0 || num > 999 || typeof num !== "number") {
    console.log("Неверное число. Введите от 0 до 999!")
    var obj = {};
    return obj;
  } else {
    var digits = ["единицы", "десятки", "сотни"];   
    var obj={};
    var i=0;
    for(var i=0; num!=0; i++){
    obj[digits[i]]=num%10;
    num=(num-num%10)/10;
		}
		}	
    return obj;
  } 
  console.log(numToObj(245));


// Task_2  Продолжить работу с интернет-магазином: 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? 2.2. Реализуйте такие объекты. 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


let apple = {
  qty: 3,
  price: 10 
};
let melon = {
  qty: 4,
  price: 10     
};
let lime = {
  qty: 2,
  price: 10     
};
let banan = {
  qty: 1,
  price: 10     
};

const basket = {
  sum: 0,
  goods: {},
  sumBasket: function () {
    let sum = 0;
    for (let key in this.goods) {
      const elem = this.goods [key];
      sum += elem.qty * elem.price;
    }
    this.sum = sum;
    return sum;
  }
};
basket.goods = {apple, melon, lime, banan};
basket.sumBasket ();
console.log("Стоимость корзины: " + basket.sum + " руб.");



