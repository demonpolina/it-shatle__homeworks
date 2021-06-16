/**
 * Задача 1
 * Дана строка. Вывести первый, последний и средний (если он есть) символы в консоль.
 * Напоминание: Обращаться к определнному символу можно по индексу симвлока в строке. Например - str[3]
 * @param {String} str
 */


 const fn1 = (str) => {

    if (str.length>2) return console.log(str[0]) + console.log(str[str.length-1]) + console.log(str[str.length/2]);
    else return console.log(str[0]) + console.log(str[str.length-1])
    }
    
    console.log(fn1('phrase'));


/**
 * Задача 2
 * Дана строка. Верните новую строку с заглавным первым символом.
 * Например: 'john' ---> 'John'
 * @param {*} str 
 */


 const fn2 = (string) => {
    let anystr = string[0].toUpperCase() + string.slice(1);
    return anystr
  }
  
  console.log(fn2('username'));

/**
 * Задача 3
 * Дана строка. Если ее длина больше 10, то оставить в строке только первые 6 символов, иначе дополнить строку символами 'o' до длины 12.
 * Подсказки: 
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * @param {String} str
 * @returns {String}
 */


 const fn3 = (str) => {
    let stroka = str;
    if (str.length > 10) {
    stroka = str.slice(0, 6);
    } 
    else {
      while(stroka.length<13) {
        stroka+='o';
      }
    }
    return stroka;
  }
  
  console.log(fn3('initiative'));



/**
 * Задача 4
 * Дана строка. Найти количество цифр в ней (1234567890)
 * Пример: 'h1e4l5lo9' ---> 4 цифры
 * Подсказки:
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * @param {String} str
 * @returns {Number}
 */


 const fn4 = (str) => {
    let summ=0
    for (let i=0; i<str.length; i++){
      if (Number(str[i]))
      summ+=1;
    }
    return(summ)
  }
   console.log(fn4('tr3num5ghj4vbn7nine9'))



/**
 * Задача 5
 * Дана строка. Замените в строке все вхождения 'word' на 'letter'.
 * Пример: 'my words is good___word' ---> 'my letters is good___letter'
 * Подсказки:
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * @param {String} str
 * @returns {String}
 */


const fn5 = (str) => {

}
