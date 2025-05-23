'use strict';

  window.addEventListener("DOMContentLoaded", () => {
    // Timeline for navbar animation
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

    // Animate logo
    tl.from(".navbar-wrapper a img", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
    })

    // Animate nav links
    .from(".navbar-nav li", {
      y: -20,
      opacity: 0,
      stagger: 0.15,
    }, "-=0.4")

    // Animate cart and menu toggle button
    .from(".navbar-btn-group > *", {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
    }, "-=0.5");
  });




// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}