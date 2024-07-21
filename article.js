const home = document.getElementById('home');
const about = document.getElementById('about');
const posts = document.getElementById('posts');
about.addEventListener('click', () => {window.location.href="index.html"})
home.addEventListener('click', () => {window.location.href="index.html"})
posts.addEventListener('click', () => {window.location.href="index.html"})

const navBar = document.getElementsByClassName('navBar')[0];
window.addEventListener('scroll', () => {
    if(window.scrollY > 90){
        navBar.classList.add('navBar-scrolled');
    }
    else if(window.scrollY <=100){
        navBar.classList.remove('navBar-scrolled');
    }
})