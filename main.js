
const main = document.getElementsByClassName('hero')[0];
const navBar = document.getElementsByClassName('navBar')[0];
const home = document.getElementById('home');
const about = document.getElementById('about');
const posts = document.getElementById('posts');
const postOne = document.getElementById('postOne');
const postTwo = document.getElementById('postTwo');
const postThree = document.getElementById('postThree');
const latestContainer = document.getElementsByClassName('latestContainer')[0];
const latestLabel = document.getElementById('latestLabel');
const aboutContainer = document.createElement('div');
aboutContainer.setAttribute("id", "aboutContainer");
const title = document.createElement('div');
title.setAttribute("id", "aboutTitle");
const paragraph = document.createElement('p');
paragraph.setAttribute("id", "paragraph");

const logo = document.createElement('img');
logo.src = "Group 8.png";
logo.setAttribute("id", "logo");


const postsContainer = document.createElement('div');
postsContainer.classList.add('postsContainer');


const p1 = document.createElement('div');
p1.setAttribute('id', 'p1');
const p1Img = document.createElement('div');
p1Img.setAttribute('id', 'p1Img');
const p1Content = document.createElement('div');
p1Content.setAttribute('id', 'p1Content');
const p1Title = document.createElement('h2');
p1Title.setAttribute('id', 'p1Title');
const p1Date = document.createElement('p');
p1Date.setAttribute('id', 'p1Date');


let postOneTC = document.getElementsByClassName('postONeTC')[0];
let postTwoTC = document.getElementsByClassName('postTwoTC')[0];
let postThreeTC = document.getElementsByClassName('postThree')[0];

let compImg = document.createElement('img');
compImg.classList.add('compImg');
const blogContainer = document.createElement('div');
blogContainer.classList.add('blogContainer');
const titleAgain = document.createElement('h1');
titleAgain.classList.add('titleAgain');


const aboutMe = () => {
    postOne.remove();
    latestLabel.innerHTML = "A B O U T";
    latestContainer.append(aboutContainer);
    title.innerHTML = "I AM REN";
    aboutContainer.append(title);
   

    const contain = document.createElement('div');
    contain.classList.add("contain");
    aboutContainer.insertAdjacentElement("beforeend",contain);
    
    paragraph.innerHTML = "Currently, I am a Computer Science student at Pangasinan State University, specializing in frontend web development. I am fond of learning languages (both computer and linguistic), as well as immersing myself in music and art. I also love Batman lol."
    contain.insertAdjacentElement("afterbegin",paragraph);
    contain.insertAdjacentElement("beforeend",logo);
    postsContainer.remove();
    postOneTC.remove();
    postTwoTC.remove();
    postThreeTC.remove();

}

const homePage = () => {
   
    latestContainer.append(postOne);

    latestLabel.innerHTML = "L A T E S T";
    aboutContainer.remove();
    title.remove();
    paragraph.remove();
    postsContainer.remove();
    p1.remove();
    p2.remove();
}

const postsPage = () => {
    
    aboutContainer.remove();
    title.remove();
    paragraph.remove();
    latestLabel.innerHTML = "P O S T S";
    postOne.remove();
    latestLabel.insertAdjacentElement("afterend",postsContainer);
    postsContainer.insertAdjacentElement('afterbegin',p1);
    p1.insertAdjacentElement('afterbegin', p1Img);
    p1Img.insertAdjacentElement('afterend', p1Content);
    compImg.src = 'computer.jpg';
    p1Img.insertAdjacentElement('afterbegin', compImg);
    p1Content.insertAdjacentElement('afterbegin', p1Title);
    p1Content.insertAdjacentElement('beforeend', p1Date);
    p1Title.innerHTML = "WHAT COMPUTER SCIENCE HAS TAUGHT ME IN 1 YEAR";
    p1Date.innerHTML = "July 21, 2024";
}
window.addEventListener('scroll', () => {
    if(window.scrollY > 90){
        navBar.classList.add('navBar-scrolled');
    }
    else if(window.scrollY <=100){
        navBar.classList.remove('navBar-scrolled');
    }
})


const test1 = () => {
    window.location.href = "article.html";
}





home.addEventListener("click", homePage);
about.addEventListener("click", aboutMe);
posts.addEventListener("click", postsPage);


postOne.addEventListener("click", test1);
p1.addEventListener("click", test1);