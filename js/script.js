"use strict";

//! - - - - - MENU - - - - - -

const menuButton = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const heroContent = document.querySelector('.hero__content');
const cleanBox = document.querySelector('.clean__box');


const handleClick = (e) => {
   e.preventDefault();
   menu.classList.toggle('menu_active');
   heroContent.classList.toggle('hero__content_active');
   cleanBox.classList.toggle('clean__box_active');
}
menuButton.addEventListener('click', handleClick);
