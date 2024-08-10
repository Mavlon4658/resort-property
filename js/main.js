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
                } else {
                    list.classList.add('flex');
                    list.classList.remove('hidden');
                }
            }

            listItem.forEach(el => {
                el.onclick = () => {
                    btn.querySelector('span').textContent = el.textContent;
                    list.classList.remove('flex');
                    list.classList.add('hidden');
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
        let tabBtns = el.querySelectorAll('.tab-head button');

        if (tabBtns.length) {
            tabBtns.forEach(btn => {
                btn.onclick = () => {
                    tabBtns.forEach(item => {
                        if (item == btn) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    })
                }
            })
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
