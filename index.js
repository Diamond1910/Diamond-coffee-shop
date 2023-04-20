// Get the nav toggle button and the nav list
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav__list');

// Add an event listener to the nav toggle button
navToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the nav list
  navList.classList.toggle('active');
});
