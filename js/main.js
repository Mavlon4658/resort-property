let dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length) {
    dropdowns.forEach(dropdown => {
        let btn = dropdown.querySelector('.dropdown-head'),
        list = dropdown.querySelector('.dropdown-body'),
        listItem = dropdown.querySelectorAll('.dropdown-body li');

        if (btn) {
            btn.onclick = () => {
                if (list.classList.contains('flex')) {
                    list.classList.remove('flex');
                    list.classList.add('hidden');
                    dropdown.classList.remove('z-10');
                } else {
                    list.classList.add('flex');
                    list.classList.remove('hidden');
                    dropdown.classList.add('z-10');
                }
            }

            listItem.forEach(el => {
                el.onclick = () => {
                    btn.querySelector('span').textContent = el.textContent;
                    list.classList.remove('flex');
                    list.classList.add('hidden');
                    dropdown.classList.remove('z-10');
                }
            })
        }
    })
}

var init = false;
var swiper;
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
        init = true;
        swiper = new Swiper(".slider-cards-js", {
            slidesPerView: "auto",
            spaceBetween: 11,
        });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

if (document.querySelector('.best_deals__paretn_swp')) {
    swiperCard();
}

let bestDealsChildChildSwp = document.querySelectorAll('.best_deals__child_swp');

if (bestDealsChildChildSwp.length) {
    bestDealsChildChildSwp.forEach(el => {
        let swp = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            loop: true,
            pagination: {
                el: el.querySelector('.swp_pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelectorAll('button')[0],
                prevEl: el.querySelectorAll('button')[1],
            }
        })
    })
}

window.addEventListener("resize", () => {
    if (document.querySelector('.best_deals__paretn_swp')) {
        swiperCard();
    }
});

let tabs = document.querySelectorAll('.tab');

if (tabs.length) {
    tabs.forEach(el => {
        let tabBtns = el.querySelectorAll('.tab-head button'),
            tabItem = el.querySelectorAll('.tab-body .tab-body__item');

        if (tabBtns.length) {
            tabBtns.forEach((btn, btnID) => {
                btn.onclick = () => {
                    tabBtns.forEach(item => {
                        if (item == btn) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    })
                    tabItem.forEach((item, idx) => {
                        if (idx == btnID) {
                            item.classList.remove('hidden');
                        } else {
                            item.classList.add('hidden');
                        }
                    })
                }
            })
        }
    })
}

let partnerSwp = new Swiper('.partners .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
        nextEl: '.partners_btn__next',
        prevEl: '.partners_btn__prev',
    }
})

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
        nextEl: '.review-btn__next',
        prevEl: '.review-btn__prev',
    }
})

let blogSwp = new Swiper('.blog .swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
})

let accordionItems = document.querySelectorAll('.accordion_item');

if (accordionItems.length) {
    accordionItems.forEach(item => {
        let accordionHead = item.querySelector('.accordion_item__head');

        accordionHead.onclick = () => {
            item.querySelector('.accordin_item__body').classList.toggle('hidden');
            item.querySelector('.accordion_item__head .plus').classList.toggle('hidden');
            item.querySelector('.accordion_item__head .minus').classList.toggle('hidden');
        }
    })
}

document.addEventListener('click', event => {
    if (dropdowns.length) {
        dropdowns.forEach(el => {
            const isClickInside = el.contains(event.target);
            let list = el.querySelector('.dropdown-body');

            if (!isClickInside) {
                list.classList.remove('flex');
                list.classList.add('hidden');
                el.classList.remove('z-10');
            }
        })
    }
})


ymaps.ready(init);

function init() {

var myMap = new ymaps.Map("map", {
    center: [44.895, 37.316],
    zoom: 13,
    controls: ["zoomControl", "fullscreenControl"],
});

myMap.setType("yandex#map");
myMap.geoObjects.options.set("preset", "islands#grayIcon");

  // Define the coordinates of the locations
  var location1 = [44.89, 37.32]; // Example coordinates
  var location2 = [44.9, 37.31]; // Example coordinates

var placemark1 = new ymaps.Placemark(
    location1,
    {},
    {
    iconLayout: "default#image",
    iconImageHref: "../images/location.png",
    iconImageSize: [218, 59],
    iconImageOffset: [-15, -15],
    }
);
var placemark2 = new ymaps.Placemark(
    location2,
    {},
    {
    iconLayout: "default#image",
    iconImageHref: "../images/location.png",
    iconImageSize: [57, 82],
    iconImageOffset: [-15, -15],
    }
);

myMap.geoObjects.add(placemark1);
myMap.geoObjects.add(placemark2);
}
