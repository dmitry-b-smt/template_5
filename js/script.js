"use strict"

const messages = document.querySelectorAll('.header__message');
const tabs = document.querySelectorAll('.header__tab');

messages.forEach(function (item, i) {
    let index = i;
    item.setAttribute('data-tabindex', index);
});

tabs.forEach(function (item, i) {
    let index = i;
    item.setAttribute('data-tabindex', index);
});

const activeTab = document.querySelector('.header__tab-active');

function showMessage(activeTab) {
    messages.forEach(function (item) {
        if (item.dataset.tabindex === activeTab.dataset.tabindex) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        };
    })
}

showMessage(activeTab);

const tabsContainer = document.querySelector('.header__tabs');

tabsContainer.addEventListener('click', function (e) {
    let target = e.target;
    let currentActiveTab = tabsContainer.querySelector('.header__tab-active');
    let currentActiveMessage = document.querySelector('.header__message.visible');
    let targetIndex = target.dataset.tabindex;
    console.log(target);
    messages.forEach(function (item) {
        if (item.dataset.tabindex === targetIndex && target.classList.contains('header__tab')) {
            currentActiveTab.classList.remove('header__tab-active');
            item.classList.add('visible');
            target.classList.add('header__tab-active');
        } else {
            if (target.classList.contains('header__tab'))
                item.classList.remove('visible');
        }
    })
})

const burgerButton = document.querySelector('.header__burger-menu-button');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerButton.addEventListener('click', function (e) {
    if (burgerButton.classList.contains('active-burger-button') === true) {
        burgerButton.classList.add('deactive-burger-button');
        burgerButton.classList.remove('active-burger-button');
        burgerMenu.classList.add('unactive');
        burgerMenu.classList.remove('active');
    } else {
        burgerButton.classList.remove('deactive-burger-button');
        burgerButton.classList.add('active-burger-button');
        burgerMenu.classList.remove('unactive');
        burgerMenu.classList.add('active');
    }
})

burgerMenu.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('menu__link') === false && target.classList.contains('menu__list') === false) {
        burgerButton.classList.add('deactive-burger-button');
        burgerButton.classList.remove('active-burger-button');
        burgerMenu.classList.add('unactive');
        burgerMenu.classList.remove('active');
    }
})




let scrollpos = window.scrollY

const menuRow = document.querySelector('.header__menu-row');
const scrollChange = 37;

const add_class_on_scroll = () => menuRow.classList.add("header__menu-row-active")
const remove_class_on_scroll = () => menuRow.classList.remove("header__menu-row-active")
const add_blur_class_on_return = () => menuRow.classList.add("header__menu-row-default")
const remove_blur_class_on_return = () => menuRow.classList.remove("header__menu-row-default")

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        add_class_on_scroll();
        remove_blur_class_on_return();
    }
    else {
        remove_class_on_scroll();
        add_blur_class_on_return();
    }

});

const servicesColumns = document.querySelectorAll('.services__column');

servicesColumns.forEach(function (item, i,) {
    let serviceColumnIndex = i;
    item.setAttribute('data-serviceindex', serviceColumnIndex);
});


const servicesItems = document.querySelectorAll('.services__item');
servicesItems.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        let column = item.closest('[data-serviceindex]');
        let icon = column.querySelector('img');
        let link = column.querySelector('.services__service-link');
        icon.style.opacity = 1;
        link.style.opacity = 1;
    })
});

servicesItems.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        let column = item.closest('[data-serviceindex]');
        let icon = column.querySelector('img');
        let link = column.querySelector('.services__service-link');
        icon.style.opacity = 0.25;
        link.style.opacity = 0.5;
    })
});