import './css/style.css'
import header from './components/header/Header.jsx'
import navbar from './components/navigation/navbar.jsx';

document.querySelector('.header').replaceWith(header())

if(document.body.classList.contains('home')){
    document.querySelector('.navigation').replaceWith(navbar())
}

const buttons = document.querySelectorAll('.navbar-item');

for(let i = 0; i < buttons.length;i++){
    if(document.body.classList.contains('home')){
        buttons[0].classList.add('active');
    }
}

const loginLink = document.querySelector('.loginLink');

loginLink.onclick = function(){
    window.location = '/login/index.html';
}
const registerLink = document.querySelector('.registerLink');

registerLink.onclick = function(){
    window.location = '/register/index.html';
}

const logoLink = document.querySelector('.logo');

logoLink.onclick = function(){
    window.location = '/';
}