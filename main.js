import './css/style.css'
import header from './components/header/Header.jsx'
import navbar from './components/navigation/navbar.jsx';
import login from './components/pages/Login.jsx';
import register from './components/pages/Register.jsx';

document.querySelector('.header').replaceWith(header())

document.querySelector('.navigation').replaceWith(navbar())

const buttons = document.querySelectorAll('.navbar-item');

for(let i = 0; i < buttons.length;i++){
    if(document.body.classList.contains('home')){
        buttons[0].classList.add('active');
    }
}

const loginLink = document.querySelector('.loginLink');

loginLink.onclick = function(){
    document.querySelector('.main').replaceWith(login())
}
const registerLink = document.querySelector('.registerLink');

registerLink.onclick = function(){
    document.querySelector('.main').replaceWith(register())
}

const logoLink = document.querySelector('.logo');

logoLink.onclick = function(){
    window.location = '/';
}