import './css/style.css'
import header from './components/header/Header.jsx'
import navbar from './components/navigation/navbar.jsx';
import posts from './components/posts/Posts.jsx';

const mainHeader = document.querySelector('.header').replaceWith(header())
const navigation = document.querySelector('.navigation').replaceWith(navbar())
const featured = document.querySelector('.featured').replaceWith(posts())

const buttons = document.querySelectorAll('.navbar-item');

for(let i = 0; i < buttons.length;i++){
    if(document.body.classList.contains('home')){
        buttons[0].classList.add('active');
    }
}

const loginLink = document.querySelector('.loginLink');

loginLink.onclick = function(){
    window.location = '/login.html';
}
const registerLink = document.querySelector('.registerLink');

registerLink.onclick = function(){
    window.location = '/register.html';
}

const logoLink = document.querySelector('.logo');

logoLink.onclick = function(){
    window.location = '/';
}

const profileIcon = document.querySelector('.profileIcon');

   
profileIcon.onclick = function(){
    const headerNav = document.querySelector('.headerLinks');

    if(window.innerWidth < 768){
        
        headerNav.classList.toggle('active');

        const profileLinks = document.querySelectorAll('.headerLink');

        for(let i = 0; i < profileLinks.length; i++){
            profileLinks[i].addEventListener('click', function(){
                headerNav.classList.remove('active');

            })      
        }
    }
}




