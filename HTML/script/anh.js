document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');
    const container = document.getElementById('container');

    loginButton.addEventListener('click', function() {
        container.classList.remove('active');
    });

    registerButton.addEventListener('click', function() {
        container.classList.add('active');
    });
});