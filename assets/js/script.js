 // Function to set the theme and update UI
 function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    var switchThemeBtn = document.getElementById('switchTheme');
    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    }
    //console.log(`Switched to ${theme} theme`);
}

var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

//AOS Initiliaze
AOS.init();

// Fixed Header & back to top button on Scroll
window.addEventListener('scroll', () => {
    // fixed header
    const header = document.getElementById('header');
    if (window.scrollY > 30 && !header.classList.contains('fixed-top')) {
        header.classList.add('fixed-top');
        document.getElementById('offcanvasNavbar').classList.add('fixedHeaderNavbar');
    } else if (window.scrollY <= 30 && header.classList.contains('fixed-top')) {
        header.classList.remove('fixed-top');
        document.getElementById('offcanvasNavbar').classList.remove('fixedHeaderNavbar');
    }

    //backtotop
    const backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > 400 && backToTopButton.style.display === 'none') {
        backToTopButton.style.display = 'block';
    } else if (window.scrollY <= 400 && backToTopButton.style.display === 'block') {
        backToTopButton.style.display = 'none';
    }
});


//jumping to top function
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Testimonial Slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        nav:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1170:{
                items:3,
            }
        }
    });
});
// Define the text variations
const textVariations = ['veloper', 'signer'];
let index = 0;
let isDeleting = false;
let currentText = '';
let typingSpeed = 150; // Adjust typing speed as needed

// Function to simulate typing and deletion
function type() {
  const text = textVariations[index];
  if (isDeleting) {
    currentText = text.substring(0, currentText.length - 1);
  } else {
    currentText = text.substring(0, currentText.length + 1);
  }
  document.getElementById('animatedText').innerHTML = currentText;

  // Typing speed
  let typeSpeed = typingSpeed;
  if (isDeleting) {
    typeSpeed /= 2; // Faster deletion
  }

  // Check if text is fully typed or deleted
  if (!isDeleting && currentText === text) {
    isDeleting = true;
    typeSpeed = 500; // Pause before deletion
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    index = (index + 1) % textVariations.length; // Move to the next text variation
  }

  setTimeout(type, typeSpeed);
}

// Start the typing animation
type();

