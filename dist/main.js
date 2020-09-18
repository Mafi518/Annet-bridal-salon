'use strict';

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');

    var links = document.querySelectorAll('.menu__item').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
        };
    });
});

if (document.querySelector('.filter__menu-icon')) {
    var filterMenuIcon = document.querySelector('.filter__menu-icon').addEventListener('click', function () {
        var filterMenu = document.querySelector('.catalog__filter');
        this.classList.toggle('filter__menu-icon__active');
        filterMenu.classList.toggle('filter__menu-active');
        disableScroll();
    });
}

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

$(document).ready(function () {
    $('.new-positions__list').slick({
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        responsive: [{
            breakpoint: 846,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.another__position-list').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 846,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.sales-position__list').slick({
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        responsive: [{
            breakpoint: 846,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    });
});

function setValid(field) {
    field.style.border = '1px solid #000';
    field.classList.remove('invalid');
    field.classList.add('valid');
}
function setInvalid(field) {
    field.classList.remove('valid');
    field.classList.add('invalid');
    field.style.border = '1px solid tomato';
}

function validateName() {
    var name = document.querySelector('#name');

    if (name.value.trim() === '') {
        setInvalid(name);
    } else if (name.value.trim().length < 2) {
        setInvalid(name);
    } else {
        setValid(name);
    }
}

function lastNameValidate() {
    var lastname = document.querySelector('#lastname');

    if (lastname.value.trim() === '') {
        setInvalid(lastname);
    } else if (lastname.value.trim().length < 2) {
        setInvalid(lastname);
    } else {
        setValid(lastname);
    }
}

function validatePhone() {
    var phone = document.querySelector('#phone');

    if (this.value.trim() === '') {
        setInvalid(phone);
    } else if (this.value.trim().length !== 11) {
        setInvalid(phone);
    } else if (!this.value.trim().match(/^[0-9]+$/)) {
        setInvalid(phone);
    } else {
        setValid(phone);
    }
}

function validateEmail() {
    var email = document.querySelector('#e-mail');

    if (email.value.trim() === '') {
        setInvalid(email);
    } else if (!email.value.trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setInvalid(email);
    } else {
        setValid(email);
    }
}

function validateDate() {
    var orderDate = document.querySelector('#orderDate');

    if (orderDate.value.trim() === '') {
        setInvalid(orderDate);
    } else {
        setValid(orderDate);
    }
}

if (document.querySelector('.form')) {
    var name = document.querySelector('#name').addEventListener('focusout', validateName);

    var phone = document.querySelector('#phone').addEventListener('focusout', validatePhone);

    var email = document.querySelector('#e-mail').addEventListener('focusout', validateEmail);

    var lastName = document.querySelector('#lastname').addEventListener('focusout', lastNameValidate);

    var orderDate = document.querySelector('#orderDate').addEventListener('focusout', validateDate);

    var submit = document.querySelector('#submit').addEventListener('click', function (e) {
        e.preventDefault();
        var name = document.querySelector('#name');
        var phone = document.querySelector('#phone');
        var email = document.querySelector('#e-mail');
        var lastName = document.querySelector('#lastname');
        var orderDate = document.querySelector('#orderDate');

        if (name.classList.contains('valid') && phone.classList.contains('valid') && email.classList.contains('valid') && lastName.classList.contains('valid') && orderDate.value != '') {
            var success = document.querySelector('.success__popup');
            success.style.opacity = 1;
            success.style.display = 'block';
            var successBg = document.querySelector('.success__bg');
            successBg.style.opacity = 0.7;
            successBg.style.zIndex = 5;
            successBg.addEventListener('click', function () {
                success.style.opacity = 0;
                success.style.display = 'none';
                successBg.style.opacity = 0;
                successBg.style.zIndex = -1;
            });
            console.log(orderDate);
        }
    });
} else {}

if (document.querySelector('#range')) {
    var range = document.getElementById('range').addEventListener('mousemove', function () {
        var currentPrice = this.value;
        document.querySelector('.current-price-max').innerHTML = currentPrice;
    });
} else {}