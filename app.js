const pageDemarrage = document.getElementById('pageDemarrage');
const pageGame = document.getElementById('pageGame');

const buttonStart = document.getElementById('buttonStart');


buttonStart.addEventListener('click', (event) => {
    /*
    pageGame.classList.remove("hidden")
    console.log(event);*/
    pageGame.style.zIndex = 1;

})