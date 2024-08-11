let dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length) {
  dropdowns.forEach((dropdown) => {
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
      };

      listItem.forEach((el) => {
        el.onclick = () => {
          btn.querySelector('span').textContent = el.textContent;
          list.classList.remove('flex');
          list.classList.add('hidden');
          dropdown.classList.remove('z-10');
        };
      });
    }
  });
}

var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.slider-cards-js', {
        slidesPerView: 'auto',
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

let bestDealsChildChildSwp = document.querySelectorAll(
  '.best_deals__child_swp'
);

if (bestDealsChildChildSwp.length) {
  bestDealsChildChildSwp.forEach((el) => {
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
      },
    });
  });
}

window.addEventListener('resize', () => {
  if (document.querySelector('.best_deals__paretn_swp')) {
    swiperCard();
  }
});

let tabs = document.querySelectorAll('.tab');

if (tabs.length) {
  tabs.forEach((el) => {
    let tabBtns = el.querySelectorAll('.tab-head button'),
      tabItem = el.querySelectorAll('.tab-body .tab-body__item');

    if (tabBtns.length) {
      tabBtns.forEach((btn, btnID) => {
        btn.onclick = () => {
          tabBtns.forEach((item) => {
            if (item == btn) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
          tabItem.forEach((item, idx) => {
            if (idx == btnID) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
        };
      });
    }
  });
}

let partnerSwp = new Swiper('.partners .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 32,
  navigation: {
    nextEl: '.partners_btn__next',
    prevEl: '.partners_btn__prev',
  },
});

let reviewSwp = new Swiper('.review .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 32,
  navigation: {
    nextEl: '.review-btn__next',
    prevEl: '.review-btn__prev',
  },
});

let blogSwp = new Swiper('.blog .swiper', {
  slidesPerView: 3,
  spaceBetween: 32,
});

let accordionItems = document.querySelectorAll('.accordion_item');

if (accordionItems.length) {
  accordionItems.forEach((item) => {
    let accordionHead = item.querySelector('.accordion_item__head');

    accordionHead.onclick = () => {
      item.querySelector('.accordin_item__body').classList.toggle('hidden');
      item
        .querySelector('.accordion_item__head .plus')
        .classList.toggle('hidden');
      item
        .querySelector('.accordion_item__head .minus')
        .classList.toggle('hidden');
    };
  });
}

document.addEventListener('click', (event) => {
  if (dropdowns.length) {
    dropdowns.forEach((el) => {
      const isClickInside = el.contains(event.target);
      let list = el.querySelector('.dropdown-body');

      if (!isClickInside) {
        list.classList.remove('flex');
        list.classList.add('hidden');
        el.classList.remove('z-10');
      }
    });
  }
});

try {
  // parahot swiper
  var parahotSwiper = new Swiper('.parahot-slider', {
    speed: 800,
    spaceBetween: 32,
    slidesPerView: 1.6,
    navigation: {
      nextEl: '.btn__next',
      prevEl: '.btn__prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.6,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
// catalog-swiper
try {
  var catalogSwiper = new Swiper('.catalog-swiper', {
    speed: 800,
    spaceBetween: 32,
    slidesPerView: 2.4,
    navigation: {
      nextEl: '.btn__next',
      prevEl: '.btn__prev',
    },
  });
} catch (error) {}
// try {
//   ymaps.ready(init);

//   function init() {
//     var myMap = new ymaps.Map('map', {
//       center: [44.895, 37.316],
//       zoom: 13,
//       controls: ['zoomControl', 'fullscreenControl'],
//     });

//     myMap.setType('yandex#map');
//     myMap.geoObjects.options.set('preset', 'islands#grayIcon');

//     // Define the coordinates of the locations
//     var location1 = [44.89, 37.32]; // Example coordinates
//     var location2 = [44.9, 37.31]; // Example coordinates

//     var placemark1 = new ymaps.Placemark(
//       location1,
//       {},
//       {
//         iconLayout: 'default#image',
//         iconImageHref: '../images/location.png',
//         iconImageSize: [218, 59],
//         iconImageOffset: [-15, -15],
//       }
//     );
//     var placemark2 = new ymaps.Placemark(
//       location2,
//       {},
//       {
//         iconLayout: 'default#image',
//         iconImageHref: '../images/blog-card-1.png',
//         iconImageSize: [218, 59],
//         iconImageOffset: [-15, -15],
//       }
//     );

//     myMap.geoObjects.add(placemark1);
//     myMap.geoObjects.add(placemark2);
//   }
// } catch (error) {}
try {
  ymaps.ready(init);

  function init() {
    var map = new ymaps.Map('map', {
      center: [55.751244, 37.618423], // Moskva markazi
      zoom: 14,
      controls: [],
    });

    // Custom HTML placemark
    var CustomPlacemark = ymaps.templateLayoutFactory.createClass(
      `<div class="customPlacemark-content">
        <div className="circle-img">
          <img src="../images/apartment-1.png" />
        </div>
        <div>
          <h4>Золотой берег</h4>
          <span>Апарт-отель</span>
        </div>
      </div>`
    );

    var placemark1 = new ymaps.Placemark(
      [55.76212, 37.61556],
      {},
      {
        iconLayout: CustomPlacemark,
      }
    );

    var placemark2 = new ymaps.Placemark(
      [55.751244, 37.618423],
      {},
      {
        iconLayout: CustomPlacemark,
      }
    );

    // Xaritada placemarklarni qo'shish
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
  }
} catch (error) {
  console.log(error);
}

try {
  const listProduct = document.querySelector('.list-product');
  const groupProduct = document.querySelector('.group-product');
  const catalogProducts = document.querySelector('.catalog-products');
  const mapProduct = document.querySelector('.map-product');
  const mapProductBtn = document.querySelector('.map-product__btn');
  const catalogProductsBox = document.querySelector('.catalog-products__box');

  listProduct.addEventListener('click', () => {
    groupProduct.classList.remove('active');
    listProduct.classList.add('active');
    catalogProducts.classList.add('grid-cols-1', 'list');
    catalogProducts.classList.remove('grid-cols-4');
    catalogProductsBox.classList.remove('hidden');
    mapProduct.classList.add('hidden');
  });
  groupProduct.classList.add('active');
  groupProduct.addEventListener('click', () => {
    groupProduct.classList.add('active');
    listProduct.classList.remove('active');
    catalogProducts.classList.remove('grid-cols-1', 'list');
    catalogProducts.classList.add('grid-cols-4');
    catalogProductsBox.classList.remove('hidden');
    mapProduct.classList.add('hidden');
  });
  mapProductBtn.addEventListener('click', () => {
    groupProduct.classList.remove('active');
    listProduct.classList.remove('active');
    catalogProductsBox.classList.add('hidden');
    mapProduct.classList.remove('hidden');
  });
} catch (error) {}

// range slider
try {
  function setValues(lowerInput, upperInput, lowerValue, upperValue, track) {
    lowerValue.textContent = `${(lowerInput.value * 2 + 44.5).toFixed(1)} млн`;
    upperValue.textContent = `${(upperInput.value * 2 + 44.5).toFixed(1)} млн`;
    updateSliderTrack(lowerInput, upperInput, track);
  }

  function updateSliderTrack(lowerInput, upperInput, track) {
    const min = parseInt(lowerInput.min);
    const max = parseInt(upperInput.max);
    const lowerValue = parseInt(lowerInput.value);
    const upperValue = parseInt(upperInput.value);

    const lowerPercent = ((lowerValue - min) / (max - min)) * 100;
    const upperPercent = ((upperValue - min) / (max - min)) * 100;

    track.style.left = `${lowerPercent}%`;
    track.style.width = `${upperPercent - lowerPercent}%`;
  }

  document.querySelectorAll('.range-slider').forEach((slider, index) => {
    const lowerInput = slider.querySelector(`#lower${index + 1}`);
    const upperInput = slider.querySelector(`#upper${index + 1}`);
    const lowerValue = slider.querySelector(`#lower-value${index + 1}`);
    const upperValue = slider.querySelector(`#upper-value${index + 1}`);
    const track = slider.querySelector(`#track${index + 1}`);

    lowerInput.addEventListener('input', () => {
      setValues(lowerInput, upperInput, lowerValue, upperValue, track);
    });

    upperInput.addEventListener('input', () => {
      setValues(lowerInput, upperInput, lowerValue, upperValue, track);
    });

    // Set initial values
    setValues(lowerInput, upperInput, lowerValue, upperValue, track);
  });
} catch (error) {
  console.log(error);
}
