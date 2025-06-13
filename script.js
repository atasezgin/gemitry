// Loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('loader-hidden');
    }, 1000);
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Parallax effect
document.addEventListener('mousemove', function(e) {
    const parallaxElements = document.querySelectorAll('.parallax');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.05;
        const x = (window.innerWidth / 2 - mouseX) * speed;
        const y = (window.innerHeight / 2 - mouseY) * speed;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});


// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    formMessage.classList.remove('hidden');
    formMessage.classList.add('text-primary');
    formMessage.textContent = 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.';
    
    // Reset form
    this.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
});