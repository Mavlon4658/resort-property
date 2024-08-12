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
	if (window.innerWidth <= 1024) {
		if (!init) {
			init = true;
			swiper = new Swiper('.best_deals__paretn_swp', {
				slidesPerView: 'auto',
				spaceBetween: 11,
				nested: true,
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
			nested: true,
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
	spaceBetween: 16,
	breakpoint: {
		1024: {
			spaceBetween: 32,
		},
	},
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
	slidesPerView: 1,
	spaceBetween: 32,
	breakpoint: {
		768: {
			slidesPerView: 3,
		},
		640: {
			slidesPerView: 2,
		},
	},
	navigation: {
		nextEl: '.blog_btn__next',
		prevEl: '.blog_btn__prev',
	},
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

let headerBars = document.querySelector('.header_bars'),
    mobileMenu = document.querySelector('.mobile_menu'),
    mobileMenuClose = document.querySelector('.mobile_menu__close');

if (headerBars) {
  headerBars.onclick = () => {
    mobileMenu.classList.toggle('hidden');
  }
  mobileMenuClose.onclick = () => {
    mobileMenu.classList.add('hidden');
  }
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
} catch (error) { }
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
		breakpoints: {
			992: {
				slidesPerView: 2.4,
				spaceBetween: 32,
			},
			0: {
				slidesPerView: 1.3,
				spaceBetween: 20,
			},
		},
	});
} catch (error) { }
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
	const mapProductBtn = document.querySelectorAll('.map-product__btn');
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
	mapProductBtn.forEach((btn) =>
		btn.addEventListener('click', () => {
			groupProduct.classList.remove('active');
			listProduct.classList.remove('active');
			catalogProductsBox.classList.add('hidden');
			mapProduct.classList.remove('hidden');
		})
	);
} catch (error) { }

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
	function init() {
		var myMap = new ymaps.Map('map', {
			center: [44.895, 37.316],
			zoom: 13,
			controls: ['zoomControl', 'fullscreenControl'],
		});

		myMap.setType('yandex#map');
		myMap.geoObjects.options.set('preset', 'islands#grayIcon');

		// Define the coordinates of the locations
		var location1 = [44.89, 37.32]; // Example coordinates
		var location2 = [44.9, 37.31]; // Example coordinates

		var placemark1 = new ymaps.Placemark(
			location1,
			{},
			{
				iconLayout: 'default#image',
				iconImageHref: '../images/location.png',
				iconImageSize: [218, 59],
				iconImageOffset: [-15, -15],
			}
		);
		var placemark2 = new ymaps.Placemark(
			location2,
			{},
			{
				iconLayout: 'default#image',
				iconImageHref: '../images/location.png',
				iconImageSize: [57, 82],
				iconImageOffset: [-15, -15],
			}
		);

		myMap.geoObjects.add(placemark1);
		myMap.geoObjects.add(placemark2);
	}
} catch (error) { }

// try {
//   ymaps.ready(init);

//   function init() {
//     var map = new ymaps.Map('map', {
//       center: [55.751244, 37.618423], // Moskva markazi
//       zoom: 14,
//       controls: [],
//     });

//     // Custom HTML placemark
//     var CustomPlacemark = ymaps.templateLayoutFactory.createClass(
//       `<div class="customPlacemark">
//         <div className="circle"></div>
//         <div>
//           <h4>Главный офис</h4>
//           <span>Дзержинского, 244</span>
//         </div>
//       </div>`
//     );

//     var placemark1 = new ymaps.Placemark(
//       [55.75222, 37.61556],
//       {},
//       {
//         iconLayout: CustomPlacemark,
//       }
//     );

//     var placemark2 = new ymaps.Placemark(
//       [55.751244, 37.618423],
//       {},
//       {
//         iconLayout: CustomPlacemark,
//       }
//     );

//     // Xaritada placemarklarni qo'shish
//     map.geoObjects.add(placemark1);
//     map.geoObjects.add(placemark2);
//   }
// } catch (error) {
//   console.log(error);
// }

try {
	const propertyValue = document.getElementById('toSlider1');
	const downPayment = document.getElementById('toSlider2');
	const loanTerm = document.getElementById('toSlider3');
	const propertyValueOutput = document.getElementById('toSliderTooltip1');
	const downPaymentOutput = document.getElementById('toSliderTooltip2');
	const loanTermOutput = document.getElementById('toSliderTooltip3');
	const monthlyPayment = document.querySelector('.total-price');

	function formatCurrency(value) {
		return new Intl.NumberFormat('ru-RU', {
			minimumFractionDigits: 0,
		}).format(value);
	}

	function updateValues() {
		propertyValueOutput.textContent =
			formatCurrency(propertyValue.value) + ' руб.';
		downPaymentOutput.textContent = formatCurrency(downPayment.value) + ' руб.';
		loanTermOutput.textContent = loanTerm.value + ' лет';

		// Calculate monthly payment
		const P = propertyValue.value - downPayment.value;
		const r = 0.0083; // Example monthly interest rate of 0.83%
		const n = loanTerm.value * 12;
		const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

		monthlyPayment.textContent = formatCurrency(M) + ' руб / мес';
	}

	propertyValue.addEventListener('input', updateValues);
	downPayment.addEventListener('input', updateValues);
	loanTerm.addEventListener('input', updateValues);

	updateValues();
} catch (error) { }
try {
	// First Range Slider for Investments
	const lowerInvest = document.getElementById('lower-invest');
	const upperInvest = document.getElementById('upper-invest');
	const trackInvest = document.getElementById('track-invest');
	const lowerValueInvest = document.getElementById('lower-value-invest');
	const upperValueInvest = document.getElementById('upper-value-invest');

	function setInvestValues() {
		const minValue = parseInt(lowerInvest.value);
		const maxValue = parseInt(upperInvest.value);

		if (minValue > maxValue) {
			const temp = lowerInvest.value;
			lowerInvest.value = upperInvest.value;
			upperInvest.value = temp;
		}

		lowerValueInvest.innerText = minValue + ' млн';
		upperValueInvest.innerText = maxValue + ' млн';

		trackInvest.style.left = (minValue / lowerInvest.max) * 100 + '%';
		trackInvest.style.right = 100 - (maxValue / upperInvest.max) * 100 + '%';
	}

	lowerInvest.addEventListener('input', setInvestValues);
	upperInvest.addEventListener('input', setInvestValues);

	// Second Range Slider for Area
	const lowerArea = document.getElementById('lower-area');
	const upperArea = document.getElementById('upper-area');
	const trackArea = document.getElementById('track-area');
	const lowerValueArea = document.getElementById('lower-value-area');
	const upperValueArea = document.getElementById('upper-value-area');

	function setAreaValues() {
		const minValue = parseInt(lowerArea.value);
		const maxValue = parseInt(upperArea.value);

		if (minValue > maxValue) {
			const temp = lowerArea.value;
			lowerArea.value = upperArea.value;
			upperArea.value = temp;
		}

		lowerValueArea.innerText = minValue + ' м²';
		upperValueArea.innerText = maxValue + ' м²';

		trackArea.style.left = (minValue / lowerArea.max) * 100 + '%';
		trackArea.style.right = 100 - (maxValue / upperArea.max) * 100 + '%';
	}

	lowerArea.addEventListener('input', setAreaValues);
	upperArea.addEventListener('input', setAreaValues);

	// Initialize values on page load
	setInvestValues();
	setAreaValues();
} catch (error) {

}
try {
	const mediaFilter = document.querySelector('.media-filter');
	const mediaFilterCloseBtn = document.querySelector('.close-filter__btn');
	const mediaFilterOpenBtn = document.querySelector('.open-filter__btn');
	const overlay = document.querySelector('.overlay');

	mediaFilterOpenBtn.addEventListener('click', () => {
		mediaFilter.classList.add('block');
		mediaFilter.classList.remove('hidden');
		overlay.classList.remove('hidden');
		document.body.classList.add('overflow-hidden');
	})
	mediaFilterCloseBtn.addEventListener('click', () => {
		mediaFilter.classList.remove('block');
		mediaFilter.classList.add('hidden');
		overlay.classList.add('hidden');
		document.body.classList.remove('overflow-hidden');
	})
} catch (error) {

}

function init1 () {
  const map = new ymaps.Map('map-1', {
      center: [45.02060925348547,33.88774223860815],
      zoom: 9,
      controls: []
  });

  let placemark = [
      new ymaps.Placemark([55.24176914865566,37.749417254452574], {}, {
          iconLayout: 'default#image',
          iconImageHref: './images/mark.svg',
          iconImageSize: [66.67, 83.33],
          iconImageOffset: [-33, -83]
      }),
      new ymaps.Placemark([55.24449080482076,37.74694962215887], {}, {
          iconLayout: 'default#image',
          iconImageHref: './images/mark.svg',
          iconImageSize: [66.67, 83.33],
          iconImageOffset: [-33, -83]
      }),
      new ymaps.Placemark([55.24480954510336,37.75049013805854], {}, {
          iconLayout: 'default#image',
          iconImageHref: './images/mark.svg',
          iconImageSize: [66.67, 83.33],
          iconImageOffset: [-33, -83]
      }),
      new ymaps.Placemark([55.24672193289917,37.752635905270445], {}, {
          iconLayout: 'default#image',
          iconImageHref: './images/mark.svg',
          iconImageSize: [66.67, 83.33],
          iconImageOffset: [-33, -83]
      }),
      new ymaps.Placemark([55.24331389538892,37.75443834972846], {}, {
          iconLayout: 'default#image',
          iconImageHref: './images/mark.svg',
          iconImageSize: [66.67, 83.33],
          iconImageOffset: [-33, -83]
      }),
  ];

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');

  placemark.forEach(mark => {
      map.geoObjects.add(mark);
  })

  placemark[5].balloon.open();
}

if (document.querySelector('#map-1')) {
  ymaps.ready(init1)
}