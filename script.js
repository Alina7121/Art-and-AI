document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    // Add click event listener to menu icon
    menuIcon.addEventListener('click', function () {
        // Toggle the 'active' class on menu icon
        this.classList.toggle('active');
        // Toggle the 'active' class on nav menu
        navMenu.classList.toggle('active');
    });
});
// Function to open the lightbox and display the clicked image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc; // Set the source of the image
    lightbox.style.display = 'flex'; // Show the lightbox
  }
  
  // Function to close the lightbox
    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        document.getElementById('lightbox').style.display = 'none';
        console.log('closeLightbox');
      }
      
      document.addEventListener('DOMContentLoaded', function () {
        // Get the current URL
        var currentURL = window.location.href;
        // Check if the current URL matches any of the navigation links
        if (currentURL.includes("index.html")) {
            document.getElementById('home-link').classList.add('active');
        } else if (currentURL.includes("gallery.html")) {
            document.getElementById('gallery-link').classList.add('active');
           }   else if (currentURL.includes("impact.html")) {
              document.getElementById('impact-link').classList.add('active');
        } else if (currentURL.includes("About-us.html")) {
            document.getElementById('contact-link').classList.add('active');
        }
    });