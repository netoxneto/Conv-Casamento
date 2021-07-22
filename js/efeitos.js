var iconMenu = document.querySelectorAll('.icon-menu');
var sMenu = document.querySelectorAll('.div-primaria');

iconMenu[0].addEventListener('click',()=>{
    let menu = document.getElementById('menu');
    let divp = document.getElementById('primar');
    let menu1 = document.getElementById('menu1');
    let iconh = document.getElementById('iconm');
    if(menu.classList.contains('hide')){
        menu.classList.add('show');
        menu.classList.remove('hide');
        menu1.classList.add('show');
        menu1.classList.remove('hide1');
        divp.classList.add('hidecel');
        iconh.classList.add('icon-menuHide');
        iconh.classList.remove('icon-menuShow');
    }else{
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
});

sMenu[0].addEventListener('click', ()=>{
    let menu = document.getElementById('menu');
    let iconh = document.getElementById('iconm');
    if(menu.classList.contains('show')){
        menu.classList.add('hide');
        menu.classList.remove('show');
        iconh.classList.remove('icon-menuHide');
        iconh.classList.add('icon-menuShow');
    }
});

