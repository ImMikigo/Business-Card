function updateData() {

    const lastUpdateDate = document.getElementById('last-update');

    lastUpdateDate.textContent = 'Ultimo aggiornamento: 04 Gen 2024';
    
}

// Esegui il controllo al caricamento della pagina
updateData();

// Ascolta il resize della finestra
window.addEventListener('resize', updateData);