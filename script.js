
// Update data Ultima Modifica
function updateData() {

    const lastUpdateDate = document.getElementById('last-update');

    lastUpdateDate.textContent = 'Ultimo aggiornamento: 05 Gen 2024';
    
}

// Imposta 'Mobile Variant' quando schermo max 768px 
function enableMobileVariants() {

    // Back to Home Button 
    const btn_home        = document.getElementById('btn-home'       );
    const btn_home_mobile = document.getElementById('btn-home-mobile'); 

    // Job Experiences Section
    // - Innova
    const jobExperiences_innova          = document.getElementById('jobExperiences-innova'       );
    const jobExperiences_innova_mobile   = document.getElementById('jobExperiences-innova-mobile'); 
    // - Barbacan
    const jobExperiences_barbacan        = document.getElementById('jobExperiences-barbacan'       );
    const jobExperiences_barbacan_mobile = document.getElementById('jobExperiences-barbacan-mobile'); 
    // - Void
    const jobExperiences_void            = document.getElementById('jobExperiences-void'       );
    const jobExperiences_void_mobile     = document.getElementById('jobExperiences-void-mobile'); 

    // Certifications Section
    const certifications        = document.getElementById('certifications'       );
    const certifications_mobile = document.getElementById('certifications-mobile');

    // Driving License Section
    const drivingLicense        = document.getElementById('drivingLicense'       );
    const drivingLicense_mobile = document.getElementById('drivingLicense-mobile');

    if (window.innerWidth <= 768) {

        // none - block

        // Job Experiences Section
        // - Innova
        jobExperiences_innova.style.display        = 'none'
        jobExperiences_innova_mobile.style.display = 'block'
        // - Barbacan
        jobExperiences_barbacan.style.display        = 'none'
        jobExperiences_barbacan_mobile.style.display = 'block'
        // - Void
        jobExperiences_void.style.display        = 'none'
        jobExperiences_void_mobile.style.display = 'block'

        // Back to Home Button 
        btn_home.style.display        = 'none';
        btn_home_mobile.style.display = 'block'; 

        // Certifications Section
        certifications.style.display        = 'none';
        certifications_mobile.style.display = 'block'; 

        // Driving License Section
        drivingLicense.style.display        = 'none';
        drivingLicense_mobile.style.display = 'block'; 

    } else {

        // block - none

        // Job Experiences Section
        // - Innova
        jobExperiences_innova.style.display        = 'block'
        jobExperiences_innova_mobile.style.display = 'none'
        // - Barbacan
        jobExperiences_barbacan.style.display        = 'block'
        jobExperiences_barbacan_mobile.style.display = 'none'
        // - Void
        jobExperiences_void.style.display        = 'block'
        jobExperiences_void_mobile.style.display = 'none'

        // Back to Home Button 
        btn_home.style.display        = 'block';
        btn_home_mobile.style.display = 'none'; 

        // Certifications Section
        certifications.style.display        = 'block';
        certifications_mobile.style.display = 'none' ; 

        // Driving License Section
        drivingLicense.style.display        = 'block';
        drivingLicense_mobile.style.display = 'none'; 

    }
}

// Call Functions on Resize
enableMobileVariants();
updateData();

// Update al resize della finestra
window.addEventListener('resize', updateData);
window.addEventListener('resize', enableMobileVariants);