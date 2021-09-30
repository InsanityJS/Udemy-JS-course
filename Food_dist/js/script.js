"use strict";

//* Создание табов
//* Есть три задачи
// 1) Скрыть табы
// 2) Показать нужный таб
// 3) Назначить обработчик событий который будет переключать наши табы
//* Добавить перменные, их 3: кнопки переключения, табы и родитель всего контента

window.addEventListener('DOMContentLoaded', () => {
    const tabsContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');


        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            })

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
        
        function showTabContent(i = 0) {
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show');
            tabs[i].classList.add('tabheader__item_active');

        }
                
        hideTabContent();
        showTabContent();

        function switchTab() {
            tabsParent.addEventListener('click', (event) => {
                const target = event.target;

                if(target && target.classList.contains('tabheader__item')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    })
                }
            });
        }
        switchTab();

});