let swiperBrand = Swiper;
let init = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width:767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width:1119px)');
    let desktop = window.matchMedia('(min-width: 1120px)');

    if(mobile.matches) {
        if (!init){
            init = true;            
            swiper = new Swiper ('.swiper-container', {
                        
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                },
                slideToClickedSlide:true,
                slidesPerView: 1,
                watchOverflow: true,
                spaceBetween: 16,
                // centeredSlides: true,
                loop: true,
                loopedSlides:1,
                freeMode:true,
                observer: true,
                grabCursor: true,
                observerParents: true, 
            });
        }
    }

    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('resize', function() {
    swiperMode();
});

// window.onload (function() {
//     // let loaded = sessionStorage.getItem('loaded');
//     // if (loaded) {
//     swiperMode();
//     // }
// });




let change = document.querySelector('.btn__open');
let openItem = document.querySelector('.brand__slider');
    change.addEventListener('click', function() {
        let changeText = document.getElementById('btn__open');
        if (changeText.innerHTML == 'Показать все' ) {
            changeText.innerHTML = 'Скрыть';
            openItem.style.height = 'auto';
            change.classList.add('open__button--reverse')
        }
        else {
            changeText.innerHTML = 'Показать все';
            openItem.style.height = '200px';
            change.classList.remove('open__button--reverse');
        }
    });