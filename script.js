document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('active')); // Remove active class
    this.classList.add('active'); // Add active class to clicked link
  });
});


