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
        let parent = item.closest('[data-serviceindex]');
        let icon = parent.querySelector('img');
        let link = parent.querySelector('.services__service-link');
        icon.style.opacity = 1;
        link.style.opacity = 1;
    })
});

servicesItems.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        let parent = item.closest('[data-serviceindex]');
        let icon = parent.querySelector('img');
        let link = parent.querySelector('.services__service-link');
        icon.style.opacity = 0.25;
        link.style.opacity = 0.5;
    })
});



// -------------------------WORKS_TABS----------------------------
const allWorksButton = document.querySelector('.works__more');

function setDataIndex(array) {
    let counter = 0;
    for (let item of array) {
        var arrayIndex = counter;
        if (!item.classList.contains('disabled')) {
            item.setAttribute('data-arrayIndex', arrayIndex);
            counter += 1;
        } else {
            counter += 0;
        };
    };
};

function setEvenOdd(array) {
    array.forEach(function (item) {
        var index = item.dataset.arrayindex;
        if (parseInt(index) % 2 === 0) {
            item.classList.add('works__card-even');
        } else {
            item.classList.add('works__card-odd');
        };
    })
};

function removeEvenOdd(array) {
    array.forEach(function (item) {
        item.classList.remove('works__card-even');
        item.classList.remove('works__card-odd');
    })
}

function removeDataIndex(array) {
    array.forEach(function (item, i) {
        let arrayIndex = i;
        item.removeAttribute('data-arrayIndex', arrayIndex);
    })
}

function hideMore(array) {
    array.forEach(function (item) {
        if (Number(item.dataset.arrayindex) > 3) {
            item.classList.add('disabled');
            allWorksButton.classList.remove('works__more-disabled');
        } else {
            allWorksButton.classList.add('works__more-disabled');
        };
    });
}


const worksTabsContainer = document.querySelector('.works__tabs');
const worksTabs = document.querySelectorAll('.works__tab');
const worksCards = document.querySelectorAll('.card');


setDataIndex(worksTabs);


worksTabs.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let currentTab = worksTabsContainer.querySelector('.works__tab-active');
        currentTab.classList.remove('works__tab-active');
        item.classList.add('works__tab-active');
    });
});


setDataIndex(worksCards);
setEvenOdd(worksCards);
hideMore(worksCards)


worksTabsContainer.addEventListener('click', function (e) {
    let target = e.target;
    removeDataIndex(worksCards);
    removeEvenOdd(worksCards);
    if (target.classList.contains('works__tab')) {
        worksCards.forEach(function (item) {
            if (target.dataset.cathegory === 'all' || target.dataset.cathegory === item.dataset.cathegory) {
                item.classList.remove('disabled');
            } else {
                item.classList.add('disabled');
            };
        });
    };
    setDataIndex(worksCards);
    setEvenOdd(worksCards);
    hideMore(worksCards);
});


allWorksButton.addEventListener('click', function (e) {
    allWorksButton.classList.add('works__more-disabled');
    worksCards.forEach(function (item) {
        if (Number(item.dataset.arrayindex) > 3) {
            item.classList.remove('disabled');
        };
    });
})

worksCards.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        let parent = item.closest('[data-arrayindex]');
        let title = parent.querySelector('.card__title');
        let link = parent.querySelector('.card__link');
        title.classList.add('card__title-active');
        link.classList.add('card__link-active');
    })
});

worksCards.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        let parent = item.closest('[data-arrayindex]');
        let title = parent.querySelector('.card__title');
        let link = parent.querySelector('.card__link');
        title.classList.remove('card__title-active');
        link.classList.remove('card__link-active');
    })
});

// -----------------------INFO----------------------

const members = document.querySelectorAll('.team__card');


members.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('member__info')) {
            let parent = item.closest('.member');
            let info = parent.querySelector('.member__info');
            let name = parent.querySelector('.member__name');
            name.classList.add('member__name-active');
            info.classList.remove('member__info-default');
            info.classList.add('member__info-active');
        };
    })
});

members.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('member__background')) {
            let parent = item.closest('.member');
            let info = parent.querySelector('.member__info');
            let name = parent.querySelector('.member__name');
            name.classList.remove('member__name-active');
            info.classList.remove('member__info-active');
            info.classList.add('member__info-default');
        };
    })
});


members.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        let parent = item.closest('.member');
        let info = parent.querySelector('.member__info');
        let name = parent.querySelector('.member__name');
        name.classList.add('member__name-active');
        info.classList.remove('member__info-default');
        info.classList.add('member__info-active');
    })
});

members.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        let parent = item.closest('.member');
        let info = parent.querySelector('.member__info');
        let name = parent.querySelector('.member__name');
        name.classList.remove('member__name-active');
        info.classList.remove('member__info-active');
        info.classList.add('member__info-default');
    })
});


