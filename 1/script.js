'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch = prompt("Во сколько обойдётся?", '');
let expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch2 = prompt("Во сколько обойдётся?", '');

appData.expenses[expenseItem] = howMuch;
appData.expenses[expenseItem2] = howMuch2;


alert(money / 30);


