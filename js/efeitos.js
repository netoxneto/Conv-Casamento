var iconMenu = document.querySelectorAll('.icon-menu');
var sMenu = document.querySelectorAll('.div-primaria');

iconMenu[0].addEventListener('click',()=>{
    let menu = document.getElementById('menu');
    let divp = document.getElementById('primar');
    if(menu.classList.contains('hide')){
        menu.classList.add('show');
        menu.classList.remove('hide');
        divp.classList.add('hidecel');
    }else{
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
});

sMenu[0].addEventListener('click', ()=>{
    let menu = document.getElementById('menu');
    if(menu.classList.contains('show')){
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
});

