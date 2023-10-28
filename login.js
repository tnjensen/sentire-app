import './css/style.css'
import login from './components/pages/Login.jsx'

document.querySelector('.login-form').replaceWith(login())

const loginLink = document.querySelector('.loginLink');

loginLink.onclick = function(){
    window.location = 'login.html';
}
const registerLink = document.querySelector('.registerLink');

registerLink.onclick = function(){
    window.location = 'register.html';
}

const logoLink = document.querySelector('.logo');

logoLink.onclick = function(){
    window.location = '/';
}