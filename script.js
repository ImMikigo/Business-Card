
// Imposta 'Mobile Variant' quando schermo max 768px 
function enableMobileVariants() {

    // Back to Home Button 
    const btn_home        = document.getElementById('btn-home'       );
    const btn_home_mobile = document.getElementById('btn-home-mobile'); 

    // Job Experiences Section
    const jobExperiences        = document.getElementById('jobExperiences'       );
    const jobExperiences_mobile = document.getElementById('jobExperiences-mobile'); 

    // Education Section
    const education        = document.getElementById('education'       );
    const education_mobile = document.getElementById('education-mobile'); 

    // Languages & Skills Sections
    const languages_skills = document.getElementById('languages-skills');
    const languages_mobile = document.getElementById('languages-mobile'); 
    const skills_mobile    = document.getElementById('skills-mobile'   );

    // Certifications Section
    const certifications        = document.getElementById('certifications'       );
    const certifications_mobile = document.getElementById('certifications-mobile');

    // Driving License Section
    const drivingLicense        = document.getElementById('drivingLicense'       );
    const drivingLicense_mobile = document.getElementById('drivingLicense-mobile');

    // Footer Copyright
    const icons_copyright        = document.getElementById('icons-copyright'       );
    const icons_copyright_mobile = document.getElementById('icons-copyright-mobile');

    if (window.innerWidth <= 768) {

        // none - block
        
        // Back to Home Button 
        if (btn_home) {
            btn_home.style.display        = 'none' ;
            btn_home_mobile.style.display = 'block';
        }

        // Job Experiences Section
        if (jobExperiences) {
            jobExperiences.style.display        = 'none' ;
            jobExperiences_mobile.style.display = 'block'; 
        }

        // Education Section
        if (education) {
            education.style.display        = 'none' ;
            education_mobile.style.display = 'block'; 
        }

        // Certifications Section
        if (certifications) {
            certifications.style.display        = 'none' ;
            certifications_mobile.style.display = 'block'; 
        }

        // Languages & Skills Sections
        if (languages_skills) {
            languages_skills.style.display = 'none' ;
            languages_mobile.style.display = 'block'; 
            skills_mobile.style.display    = 'block'; 
        }

        // Driving License Section
        if (drivingLicense) {   
            drivingLicense.style.display        = 'none' ;
            drivingLicense_mobile.style.display = 'block';
        } 

        // Icons Copyright
        if (icons_copyright) {
            icons_copyright.style.display        = 'none' ;
            icons_copyright_mobile.style.display = 'block';
        }

    } else {

        // block - none

        // Back to Home Button 
        if (btn_home) {
            btn_home.style.display        = 'block';
            btn_home_mobile.style.display = 'none' ; 
        }

        // Job Experiences Section
        if (jobExperiences) {
            jobExperiences.style.display        = 'block';
            jobExperiences_mobile.style.display = 'none' ; 
        }

        // Education Section  
        if (education) {
            education.style.display        = 'block';
            education_mobile.style.display = 'none' ; 
        }

        // Certifications Section
        if (certifications) {
            certifications.style.display        = 'block';
            certifications_mobile.style.display = 'none' ; 
        }

        // Languages & Skills Sections
        if (languages_skills) {
            languages_skills.style.display = 'block';
            languages_mobile.style.display = 'none' ; 
            skills_mobile.style.display    = 'none' ;
        }

        // Driving License Section
        if (drivingLicense) {
            drivingLicense.style.display        = 'block';
            drivingLicense_mobile.style.display = 'none' ; 
        }

        // Icons Copyright
        if (icons_copyright) {
            icons_copyright.style.display        = 'block';
            icons_copyright_mobile.style.display = 'none' ;
        }
    }
}

// Call Functions on Resize
enableMobileVariants();

// Update al resize della finestra
window.addEventListener('resize', enableMobileVariants);