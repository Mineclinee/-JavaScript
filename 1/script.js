'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдётся?");
let expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch2 = prompt("Во сколько обойдётся?");

appData.expenses[expenseItem1] = howMuch;
appData.expenses[expenseItem2] = howMuch2;


alert(budget / 30);


//  Сколько типов данных существует в JS?
// - Простые типы: числа, строки, boolean,null, indefined, symbol. Объекты: массивы, //функции, обычные объекты, ошибки, реглярные . выражения, объекты даты
//     Как вывести информацию в консоль?
// - с помощью console.log  
//     Какая функция операторов || и &&?
// - && и. || или.