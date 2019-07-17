/* eslint-disable */
import { login, logout } from './login';
import { displayMap } from './mapbox';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');
const logoutBtn = document.querySelector('.nav__el--logout');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', event => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    event.preventDefault();
    login(email, password);
  });
}

if (logoutBtn) logoutBtn.addEventListener('click', logout);
