document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nav-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('nav-open');
    });
});
