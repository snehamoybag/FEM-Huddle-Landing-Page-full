// Stylesheet
import '/scss/style.scss'

// javascript
'use strict';

const newsletterForm = document.querySelector('#newsletter-form');
const newsletterEmail = document.querySelector('#newsletter-email');
const emailRegex = /(^\S{1,64})@(\S*[a-zA-Z0-9]{1,255}$)/;

// add error msg when invalid
newsletterEmail.addEventListener('invalid', () => {
  newsletterForm.classList.add('error');
});

// remove error when user types
newsletterEmail.addEventListener('input', () => {
  newsletterForm.classList.remove('error');
});

// add error msg  on submit when email is invalid
newsletterForm.addEventListener('submit', e => {
  if (!emailRegex.test(newsletterEmail.value)) {
    e.preventDefault();
    newsletterForm.classList.add('error');
  }
  else {
    newsletterForm.classList.remove('error');
    alert('Thankyou for subscribing to our weekly newsletters!');
  }
});
