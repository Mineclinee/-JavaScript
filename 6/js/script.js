let menuItem = document.getElementsByClassName('menu-item'),
    ul = document.getElementsByClassName('menu')[0],
    title = document.getElementById("title"),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName("adv")[0],
    menuItemLi = document.createElement('li'),
    promptforApple = document.querySelector('#prompt');
// console.log(menuItem[2]);
// console.log(ul);



document.body.style.backgroundImage = 'url(../6/img/apple_true.jpg)';

ul.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый элемент';
ul.appendChild(menuItemLi);

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let yourOpinion = prompt('Ваше отношение к технике Apple?');
promptforApple.textContent = yourOpinion;