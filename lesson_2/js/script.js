// Task_1 Почему код даёт именно такие результаты?
// Дан код: 
// var a = 1, b = 1, c, d;

// c = ++a; alert(c);           // ответ 2. Инкремент "++" применяется для краткости записи при увеличении значения переменной (операнда) на единицу. В случае применения префиксной формы инкремента происходит сначала увеличение значения переменной (операнда) на единицу, а затем ее вывод или дальнейшее применение в коде. В выражении присвоения значения переменной "с" первоначально происходит увеличение значения переменной "а", после которого значение "а" становится равным 2, а затем осуществляется вывод значения переменной "с" командой document.write.

// d = b++; alert(d);           // ответ 1 и 2. В случае применения постфиксной формы инкремента происходит сначала вывод значения переменной (операнда), а затем ее увеличение на единицу с дальнейшим применением в коде. В выражении присвоения значения переменной "d" первоначально происходит вывод переменной "b" командой document.write, а только затем увеличение значения переменной "b" на единицу.
// Если мы повторим ниже строку: "d = b++;", - то при выводе командой alert(d) или document.write(d) значение переменной d будет равно уже 2. И так далее при последующих повторениях строк. 

// c = (2+ ++a); alert(c);      // ответ: 5. На основании пояснений выше,в выражении c = ++a; произошло увеличение значения переменной "а". В выражении c = (2 + ++a); происходит дальнейшее увеличение значения переменной "а" на единицу (путем применения префиксного инкремента), что дает значение "3", а затем ее сложение с числом "2", что дает конечное значение переменной "с" равное "5".

// d = (2+ b++); alert(d);      //  ответ: 4. В выражении d = (2 + b++); применяется первоначально увеличенная на единицу переменная "b", т.е. со значением "2", но в данном выражении увеличение ее значения при использовании инкремента не происходит, т.к. инкремент применен в постфиксной форме. Таким образом, происходит сложение числового значения "2" и переменной "b" со значением "2".

// alert(a);                    // ответ: 3. В выражениях, приведенных в условии: с = ++a; и c = (2 + ++a); - переменная "а" увеличилась пошагово (путем двухкратного применения префиксных инкрементов) с первоначального значения "1" до значения "2" и,затем, до значения "3". Поэтому при выводе в последнем выражении отображается значение "3".

// alert(b);                    // ответ: 3. То же самое произошло с переменной "b".


// Task_2 
// Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// ответ: равен 5.

// Task_3  Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом

 const a = +prompt('ВВедите число a: ');
 const b = +prompt('ВВедите число b: ');

  if(a >= 0 && b >= 0) {
    alert ('Разность чисел равна ' + (a - b));
  } else if (a < 0 && b < 0) {
    alert ('Разность чисел равна ' + (a * b));
  } else {
    alert ('Cумма чисел равна ' + (a + b));
  }
 

// Task_4 Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

const a = 8;
switch (a) {
  case 1: 
  console.log (a++);
case 2: 
console.log (a++);
case 3: 
  console.log (a++);
  case 4: 
  console.log (a++);
  case 5: 
  console.log (a++);
  case 6: 
  console.log (a++);
  case 7: 
  console.log (a++);
  case 8: 
  console.log (a++);
  case 9: 
  console.log (a++);
  case 10: 
  console.log (a++);
  case 11: 
  console.log (a++);
  case 12: 
  console.log (a++);
  case 13: 
  console.log (a++);
  case 14: 
  console.log (a++);
  case 15: 
  console.log (a++);
}

// Task_5 Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function summ (x, y) {
return x + y;
}
let amt = summ (x, y);
console.log (amt);

function differrence (x, y) {
  return x - y;
  }
  let dff = differrence (x, y);
  console.log (dff);

  function multiplication (x, y) {
    return x * y;
    }
    let mlt = multiplication (x, y);
    console.log (mlt);

    function division (x, y) {
      return x + y;
      }
      let dvs = division (x, y);
      console.log (dvs);  

// Task_6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'сложение':
      return summ (arg1, arg2);
      case 'вычитание':
        return differrence (arg1, arg2);
        case 'умножение':
          return multiplication (arg1, arg2);  
          case 'деление':
          return division (arg1, arg2)
  }
}


// Task_7  *Сравнить null и 0. Попробуйте объяснить результат.
// ответ: null используется чтобы указать на отсутсвие вообще какого-либо значения, а 0 это уже конкретное значение.

// Task_8 *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
  if (pow > 0) {
    return val * power(val, pow - 1);
  } else if (pow < 0) {
      return val * power(val, pow + 1);
  } else
      return 1;
}
console.log(power(2, 4));
  

