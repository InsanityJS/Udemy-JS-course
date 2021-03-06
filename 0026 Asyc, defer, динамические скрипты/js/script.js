"use strict";

const p = document.querySelectorAll('p');
console.log(p);

//! Динамически загружаемый скрипт они ведут себя как async, чтобы это изменить нам нужно присвоить этому скрипту атрбиут async = false
// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = false;
// document.body.append(script);
//! Создали функцию с помощью которой можно создавать динамические скрипты и так мы проверилии как загружаются они, строго по порядку
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/another.js');