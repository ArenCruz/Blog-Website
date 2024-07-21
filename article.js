

const navBarAgain = document.getElementsByClassName('navBar')[0];
window.addEventListener('scroll', () => {
    if(window.scrollY > 90){
        navBarAgain.classList.add('navBar-scrolled');
    }
    else if(window.scrollY <=100){
        navBarAgain.classList.remove('navBar-scrolled');
    }
})