
// variabili di default
let mode = 'light';
let isFlipped = false;

// Dark mode switch
// document.getElementById('darkmode').addEventListener('change', function() {
//     if (this.checked) {

//         // cambia colore di sfondo e testo per il dark mode
//         document.querySelector('.profile-card').style.background = '#464f59';
//         document.querySelector('body').style.backgroundColor     = '#2d343b';  
//         document.querySelector('.profile-card').style.color      = '#D1D1D1'; 
//         document.querySelector('.profile-image').style.border    = '5px solid #8a93a6';
//         document.querySelectorAll('.footer-copyright a').forEach(element => {
//             element.style.color = '#00bcd4';
//         });
//         document.querySelectorAll('h5.cv-component').forEach(element => {
//             element.style.color = '#00bcd4';
//         });
//         document.querySelectorAll('.data-row-component h6').forEach(element => {
//             element.style.color = '#C8C8C8';
//         });
//         document.querySelectorAll('.description-title h5,h6').forEach(element => {
//             element.style.color = '#D1D1D1';
//         });
//         document.querySelectorAll('.strong-contacts').forEach(element => {
//             element.style.color = 'white';
//         });
//         document.querySelectorAll('.icon-alt').forEach(element => {
//             element.src = 'img/icon/download/link_darkMode_icon.png';
//         });
//         document.getElementById('contacts').style.color           = '#f2f3f5';
//         document.getElementById('contacts').style.backgroundColor = '#5c6c7a';
//         document.getElementById('download-h6').style.color        = '#B3E5FC';

//         // cambia immagine del bottone (qr o user) se flippata (in base al tema dark)
//         if (isFlipped) {
//             document.getElementById('qrcode-icon').src = 'img/icon/user/user_darkMode_icon.png';
//         } else {
//             document.getElementById('qrcode-icon').src = 'img/icon/qr/qr_darkMode_icon.png';
//         }        

//         // cambia il tema in dark
//         mode = 'dark';

//     } else {

//         // resetta i colori di sfondo e testo per il light mode
//         document.querySelector('.profile-card').style.background = ''; 
//         document.querySelector('body').style.backgroundColor     = '';
//         document.querySelector('.profile-card').style.color      = '';
//         document.querySelector('.profile-image').style.border    = '';
//         document.querySelectorAll('.footer-copyright a').forEach(element => {
//             element.style.color = '';
//         });
//         document.querySelectorAll('div.cv-component h5').forEach(element => {
//             element.style.color = '';
//         });
//         document.querySelectorAll('.data-row-component h6').forEach(element => {
//             element.style.color = '';
//         });
//         document.querySelectorAll('.description-title h5,h6').forEach(element => {  
//             element.style.color = '';
//         });
//         document.querySelectorAll('.strong-contacts').forEach(element => {
//             element.style.color = '';
//         });
//         document.querySelectorAll('.icon-alt').forEach(element => {
//             element.src = 'img/icon/download/link_lightMode_icon.png';
//         });
//         document.getElementById('contacts').style.color           = '';
//         document.getElementById('contacts').style.backgroundColor = '';
//         document.getElementById('download-h6').color              = '';

//         // cambia immagine del bottone (qr o user) se flippata (in base al tema light)
//         if (isFlipped) {   
//             document.getElementById('qrcode-icon').src = 'img/icon/user/user_lightMode_icon.png';
//         } else {
//             document.getElementById('qrcode-icon').src = 'img/icon/qr/qr_lightMode_icon.png';
//         }

//         // cambia il tema in light
//         mode = 'light';

//     }
// });

// Profile image flip
document.addEventListener('DOMContentLoaded', () => {

    // img da flippare
    const profileImage  = document.getElementById('profile-image');
    // bottone per il flip
    const flipButton    = document.getElementById('qrcode-icon');
    // immagini originali 
    const originalImage = "img/my_photo/my_photo.jpg";
    // qr da mostrare quando flippata
    const flippedImage  = "img/qrCode/temp_qrCode.jpg";

    flipButton.addEventListener('click', () => {
        if (!isFlipped) {

            // imposta qr
            profileImage.src = flippedImage;
            document.getElementById('qrcode-icon').title = 'Mostra Foto';
            
            // imposta immagine del bottone (user) in base al tema (dark o light)
            if (mode === 'dark') {
                flipButton.src = 'img/icon/user/user_darkMode_icon.png';
            }
            else {
                flipButton.src = 'img/icon/user/user_lightMode_icon.png';
            }

        } else {

            // imposta immagine originale
            profileImage.src = originalImage;
            document.getElementById('qrcode-icon').title = 'Codice QR del Sito';
            
            // imposta immagine del bottone (qr) in base al tema (dark o light)
            if (mode === 'dark') {
                flipButton.src = 'img/icon/qr/qr_darkMode_icon.png';
            }
            else {
                flipButton.src = 'img/icon/qr/qr_lightMode_icon.png';
            }
        }

        // cambia stato del flip
        isFlipped = !isFlipped; 
    });
});

// darker -> lighter (black)
// #1e2226 // #22262b // #2d343b // #464f59 // #515d69 // #5c6c7a // #738090

// darker -> lighter (white)
// #8a93a6 // #b3b9c4 // #c4c8cc // #dadde3 // #f2f3f5 // #f7f9fa


// Profile Img        by heisenberg_jr             // https://www.flaticon.com/authors/heisenberg-jr
// Linkedin Icon      by freepik                   // https://www.freepik.com/
// Github Icon        by Pixel perfect             // https://www.flaticon.com/authors/pixel-perfect
// Download Icon      by Kiranshastry              // https://www.flaticon.com/authors/kiranshastry
// Link Icon          by Creaticca Creative Agency // https://www.flaticon.com/authors/creaticca-creative-agency

// CV Background      by // https://www.flaticon.com/authors/
// Project Backgroung by // https://www.flaticon.com/authors/
// 3D Background      by // https://www.flaticon.com/authors/