// JavaScript for Supper DigiSolutions Website

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('header nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Contact form validation
  const contactForm = document.querySelector('section.contact form');

  contactForm.addEventListener('submit', event => {
      event.preventDefault();

      const name = contactForm.querySelector('input[placeholder="Your Name"]');
      const email = contactForm.querySelector('input[placeholder="Your Email"]');
      const message = contactForm.querySelector('textarea[placeholder="Your Message"]');

      if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
          alert('Please fill in all fields.');
      } else if (!validateEmail(email.value)) {
          alert('Please enter a valid email address.');
      } else {
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
      }
  });

  // Email validation function
  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Dynamic year in footer
  const footer = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `&copy; ${currentYear} Supper DigiSolutions. All rights reserved.`;
});
