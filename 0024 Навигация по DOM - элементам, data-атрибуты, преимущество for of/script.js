"use script";
//* методы которые позволяют получить данные из DOM
// console.log(document.body);
// console.log(document.documentElement); //* просмотр HTML
// console.log(document.body.childNodes); //* Все данные которые есть внутри этого элеманта
// console.log(document.body.firstChild); //* первый элемент внутри этого элемента
// console.log(document.body.lastChild); //* последний элемент внутри этого элемента
//! Если в метод будем добавлять Element, оно бьудет показывать именно елемент а не ноду, пример nextElementSibling
// console.log(document.querySelector('#current').parentNode); //* Позволяет просматривать родителя у элемента, а если parrentNode дблировать дальше, мы сможем получить родителей выше уровнем

// console.log(document.querySelector('[data-current="3"]').nextSibling); //* следующий элемент но показывает и текст
// console.log(document.querySelector('[data-current="3"]').previousSibling); //* предыдущий элемент но показывает и текст
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //* следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //* предыдущий элемент

//! Благодаря этому методу мы перебрали  document.body.childNodes и он нам показал только внутренние элементы без нодов
for (let node of document.body.childNodes) {
        if (node.nodeName == "#text") {
            continue;
        }


    console.log(node);
}