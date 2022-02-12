'use striict'


const displayWidth = document.body.clientWidth;
const firstElementY = console.log(document.body.querySelector('.main-wrapper').offsetTop)

$(document).ready(function () {
    //bg-header
    
    //burger
    $('.header__logo').click(function (e) { 
        e.preventDefault();
        if(displayWidth < 770){
            $('.header__logo, .menu').toggleClass('_menu-active');
            $('body').toggleClass('_lock');
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

});


