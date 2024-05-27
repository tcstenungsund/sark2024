document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('navbar-toggler');
    toggleButton.addEventListener('click', function() {
      toggleButton.classList.toggle('active');
      document.getElementById('CollapsingNavbar').classList.toggle('show');
    });
});