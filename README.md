Ветка master рабочая версия
Ветка Fix для изменений

Список обязательных правок: 



3) не использовать position: fixed в блоке вывода значений, это не позволит масштабировать окно браузера
4) добавить нормальные стили  по типу: https://www.figma.com/file/rSQry6PrQHJWUJ0g01Dn6p/Untitled?node-id=0%3A1
5) Оформление кода: небрежное форматирование, наличие закомментированного кода, именование классов в стилях (отсутствие стандарта).
6) Не продуман UX: непонятно назначение страницы, как с ней взаимодействовать, какие элементы являются интерактивными; невозможно пользоваться с клавиатуры без мыши.
7) Много лишних тегов.

9) Неуместное использование позиционирования absolute/fixed в блоке rates.
10) Фиксированный размер блока detail.
11) Фильтрация элементов производится при каждом рендере компонента ExchangeRates, даже если значение поля поиска не менялось.
12) Ради одного запроса можно было ограничиться встроенным функционалом и не использовать axios.

Список опциональных правок: 
1)можно добавить дополнительную информацию на отдельную страницу через router
2)разнести файл data на компоненты




<!-- npm install --save @types/react-dom -->

<!-- для роутера
import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from '../Pages/Homepage';
import { Ratepage } from '../Pages/Ratepage';

<Routes>
    <Route path="/" element={<Homepage />} />
</Routes>
 -->



// const Homepage = (data) => {
//     if (!data.lenth) return null
//     const list = data.map(item => {
//         const { name, value } = item;
//         return <li>
//             <span>{name} :</span>
//             <span>{value}</span>
//         </li>
//     })
//     return (
//         <ul>
//             {list}

//         </ul>
//     )
// }





// fetch(
//     'http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb'
// ).then((res) => res.json())
//     .then((data) => setRate(data));

// function setRate({ success, terms, privacy, timestamp, source, quotes }) {
//     document.body.insertAdjacentHTML(
//         'afterbegin',
//         `
//         <h1>${success}</h1>
//         <h2>${terms}</h2>
//         <h3>${privacy}</h3>
//         <h4>${timestamp}</h4>
//         <h5>${source}</h5>
//         <h6>${quotes}</h6>
//         `
//     );
// }




// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"))