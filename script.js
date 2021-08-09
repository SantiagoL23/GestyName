//slider
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4,
        slidesToScroll: 3,
        draggable:true,
        dots: '.carrusel__indicadores',
        arrows: {
          prev: '.carrusel__anterior',
          next: '.carrusel__siguiente'
        }
    });
});

//darkmode
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

console.log(darkMode);

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  darkModeToggle.classList.toggle('fa-sun');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  darkModeToggle.classList.toggle('fa-sun');
  localStorage.setItem('darkMode', 'null');
};

if(darkMode === "enabled"){
enableDarkMode();
}

darkModeToggle.addEventListener('click', () =>{
  darkMode = localStorage.getItem('darkMode');
if(darkMode !== 'enabled'){
  enableDarkMode();
}else{
  disableDarkMode();
  console.log(darkMode);
}
});