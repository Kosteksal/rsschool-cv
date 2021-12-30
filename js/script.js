$(document).ready(function() {
    $('#toggler').click(function() {
        $(this).toggleClass('open-menu');
        $('#nav').toggleClass('nav--open');
        $('.container__header').toggleClass('container__header--open');
        $('.header__tel').toggleClass('header__tel--open');
        $('.body').toggleClass('body--open');
    });
});