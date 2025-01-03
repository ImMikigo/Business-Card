function changeLinkText() {

    const cvBtnTxt = document.querySelector('#cv-btn-txt');

    if (window.innerWidth <= 768) {
        // cvBtnTxt.textContent = 'CV';
        cvBtnTxt.textContent = 'Curriculum Vitae';
    } else {
        cvBtnTxt.textContent = 'Curriculum Vitae';
    }
}

// Esegui il controllo al caricamento della pagina
changeLinkText();

// Ascolta il resize della finestra
window.addEventListener('resize', changeLinkText);