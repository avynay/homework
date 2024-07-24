console.log('↓ задание с приветствием ↓')
// смайлик чтобы понять что имя отрабатывает
function greet(name) {
  return `Hello, ${name} =)`
}
console.log(greet('Andrey'))
// =================================================
console.log('↓ задание с числами ↓')
// массив чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// функция с массивом чисел в аргументе
function checkNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
}
// Вызываем функцию(если убрать console.log не будет undefined) 
checkNumbers(numbers);
// =========================================================
console.log('↓ калькулятор ↓')
// функция калькулятор(хз нужно ли задавать first&second number)
function calculator (firstNumber,secondNumber,action) {
  // типа условия+результат в зависимости от условия
if (action === '+') {
  return(firstNumber + secondNumber)
} else if (action === '-') {
  return(firstNumber - secondNumber)
} else if (action === '*') {
  return(firstNumber * secondNumber)
} else if (action === '/') {
  return(firstNumber / secondNumber)
}
}
// вывод в консоль(должно быть 2 числа отделенные запятой+действие)
console.log(calculator(10,2,'*'))