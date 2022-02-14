'use striict'


const displayWidth = document.body.clientWidth;
const firstElementY = console.log(document.body.querySelector('.main-wrapper').offsetTop)

//video
const videoItem = document.body.querySelector('.video-item')
videoItem.addEventListener('click', function(e){
    this.setAttribute('controls', true)
    this.play()
    document.body.querySelector('.main-video').classList.add('_click-video')
})


$(document).ready(function () {
    //bg-header
    
    //burger
    $('.header__logo').click(function (e) { 
        e.preventDefault();
        if(displayWidth < 770){
            $('.header__logo, .menu').toggleClass('_menu-active');
            $('body').toggleClass('_lock');
        }
        if(displayWidth > 770){
            $('.header__logo, .header-content').toggleClass('_menu-active');
        }
    });

    //ScrollTo
    $('.menu-list .menu-link').click(function(event){
        onMenuLinkClick(event);
    })

    function onMenuLinkClick(e){
        const menuLink = e.target
        //if($(menuLink).data('goto') && $($(menuLink).data('goto'))){
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = $(menuLink.dataset.goto)[0]
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight
            
            if($('.header__logo').hasClass('_active-menu')){
                $('.header__logo').removeClass('_active-menu')
                $('body').removeClass('_lock')
                $('.menu').removeClass('_active-menu')
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
        
    }

    //Footer links
    function openLinksFooter(mainItem, oppositeItem, list, listOpposite, parity, parityOpposite) {
        $(mainItem).toggleClass('_footer-active__item__'+parity).next().toggleClass('_footer-active__item__'+parity)
        $(list).toggleClass('_footer-active__item__'+parity)
        if($(oppositeItem).hasClass('_footer-active__item__'+parityOpposite)){
            $(oppositeItem).removeClass('_footer-active__item__'+parityOpposite).next().removeClass('_footer-active__item__'+parityOpposite)
            $(list).removeClass('_footer-active__item__'+parityOpposite)
        }/* 
        if($(listOpposite).hasClass('_footer-active__item__'+parityOpposite)){
            $(listOpposite).removeClass('_footer-active__item__'+parityOpposite)
            $(listOpposite).children()[0].children()[0].removeClass('_footer-active__item__'+parityOpposite)
        }
        if($(listOpposite).hasClass('_footer-active__item__'+parity)){
            $(listOpposite).removeClass('_footer-active__item__'+parity)
            $(listOpposite).children()[0].children()[0].removeClass('_footer-active__item__'+parity)
        } */
        
    }

    $('.footer__title__first').click(function (e) { 
        openLinksFooter('.footer__title__first', '.footer__title__second', '.footer-content-main__list__left', 'footer-content-main__list__right', 'odd', 'even')
    });
    $('.footer__title__second').click(function (e) { 
        openLinksFooter('.footer__title__second', '.footer__title__first', '.footer-content-main__list__left', 'footer-content-main__list__right', 'even', 'odd')
    });
    $('.footer__title__third').click(function (e) { 
        openLinksFooter('.footer__title__third', '.footer__title__fourth', '.footer-content-main__list__right', 'footer-content-main__list__left', 'odd', 'even')
    });
    $('.footer__title__fourth').click(function (e) { 
        openLinksFooter('.footer__title__fourth', '.footer__title__third', '.footer-content-main__list__right', 'footer-content-main__list__left', 'even', 'odd')
    });
    

});


