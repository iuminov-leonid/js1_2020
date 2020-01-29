
/*1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить 
на выходе объект, в котором в соответствующих свойствах
описаны единицы, десятки и сотни. Например, для числа 245
мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение
с помощью console.log и вернуть пустой объект.*/

let total = 999
let figure = {
    number: Math.round(Math.random() * total),
    units: 0,
    tens: 0,
    hundreds: 0,
}
if (figure.number <= 9) {
    figure.units = figure.number
} else if (figure.number <= 999) {
    figure.units = Math.floor(figure.number % 10)
    figure.tens = Math.floor(figure.number / 10 % 10)
    figure.hundreds = Math.floor(figure.number / 100 % 10)
} else {
    figure.number = 0
    console.log('Попробуйте ещё раз!')
}
console.log(figure)


/*2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу*/

let wer = [
    { name: "Товар 1", price: 1200, weightGrams: 300 },
    { name: "Товар 2", price: 1300, weightGrams: 450 },
    { name: "Товар 3", price: 1400, weightGrams: 380 },
    { name: "Товар 4", price: 1500, weightGrams: 250 },
    { name: "Товар 5", price: 1600, weightGrams: 999 }
]
console.log("Итого" + basket(wer) + " рублей")

function basket(_wer) {
    let basket = 0
    for (let item of wer) {
        basket += item["price"]
    }
    return basket
}

