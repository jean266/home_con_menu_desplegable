window.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    mostrarMenu();
    mostrarMenuMovil();
    mostarSubMenusMobil();
    mostrarSubMenusDesktop();
}

function mostrarMenu() {
    const menuDesktop = document.querySelector('#menu_desktop');
    const menuMobil = document.querySelector('#menu_mobil');

    const tamañoPantalla = document.body.clientWidth;

    if(tamañoPantalla > 1024) {
        menuDesktop.classList.remove('ocultar');
    } else {
        menuMobil.parentElement.classList.remove('ocultar');
    }

    window.addEventListener('resize', () => {
        const tamañoPantalla = document.body.clientWidth;

        if(tamañoPantalla > 1024) {
            if(!menuMobil.parentElement.classList.contains('ocultar')) {
                menuMobil.parentElement.classList.add('ocultar');
            }

            menuDesktop.classList.remove('ocultar');
        } else if(tamañoPantalla < 1024) {
            if(!menuDesktop.classList.contains('ocultar')) {
                menuDesktop.classList.add('ocultar');
            }

            menuMobil.parentElement.classList.remove('ocultar');
        }
    })
}

function mostrarMenuMovil() {
    const btnAbrir = document.querySelector('#btn_mobil-abrir');
    const btnCerrar = document.querySelector('#btn_mobil-cerrar');
    const menuMobil = document.querySelector('#menu_mobil');

    btnAbrir.addEventListener('click', () => {
        menuMobil.classList.remove('ocultar');
        limpiarMenus();
    });
    
    btnCerrar.addEventListener('click', (e) => {
        menuMobil.classList.add('ocultar');
        limpiarMenus();
    });
}

function mostarSubMenusMobil() {
    const btnFactures = document.querySelector('#btn_factures-mobil');
    const menuFactures = document.querySelector('#menu_factures-mobil');
    const btnCompany = document.querySelector('#btn_company-mobil');
    const menuCompany = document.querySelector('#menu_company-mobil');

    btnFactures.addEventListener('click', () => {
        menuFactures.classList.toggle('ocultar');
        btnFactures.children[1].classList.toggle('activo');
    });

    btnCompany.addEventListener('click', () => {
        menuCompany.classList.toggle('ocultar');
        btnCompany.children[1].classList.toggle('activo');
    });
}

function mostrarSubMenusDesktop() {
    const btnFactures = document.querySelector('#btn_factures-desktop');
    const menuFactures = document.querySelector('#menu_factures-desktop');
    const btnCompany = document.querySelector('#btn_company-desktop');
    const menuCompany = document.querySelector('#menu_company-desktop');

    btnFactures.addEventListener('click', () => {
        menuFactures.classList.toggle('ocultar');
        btnFactures.children[1].classList.toggle('activo');
    });

    btnCompany.addEventListener('click', () => {
        menuCompany.classList.toggle('ocultar');
        btnCompany.children[1].classList.toggle('activo');
    });
}

// oculta los sub-menus del movil cuando se cierra el menu principal
function limpiarMenus() {
    const btnFactures = document.querySelector('#btn_factures-mobil');
    const menuFactures = document.querySelector('#menu_factures-mobil');
    const btnCompany = document.querySelector('#btn_company-mobil');
    const menuCompany = document.querySelector('#menu_company-mobil');
    
    if(!menuFactures.classList.contains('ocultar')) {
        menuFactures.classList.add('ocultar');
        btnFactures.children[1].classList.remove('activo');
    } else if(!menuCompany.classList.contains('ocultar')) {
        menuCompany.classList.add('ocultar');
        btnCompany.children[1].classList.remove('activo');
    }
}