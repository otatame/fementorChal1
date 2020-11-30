const hambs = document.getElementById('hamburger');
const men1 = document.getElementsByClassName('menu1');
const men2 = document.getElementsByClassName('menu2');
const hambs2 = document.getElementsByClassName('hamburger2');
const navs = document.getElementsByClassName('navs');

$(hambs).click(function(){
    $(men1).toggleClass('slide')
    $(men2).toggleClass('slide')
    $(hambs2).toggleClass('appear')
    $(this).toggleClass('gone')
});

$(hambs2).click(function(){
    $(men1).removeClass('slide')
    $(men2).removeClass('slide')
    $(this).removeClass('appear')
    $(hambs).removeClass('gone')
})

$(window).on('scroll',function(){
    if($(window).scrollTop() > 500){
        $(navs).addClass('black');
    }
    else if($(window).scrollTop() < 50){
        $(navs).removeClass('black');
    }
})