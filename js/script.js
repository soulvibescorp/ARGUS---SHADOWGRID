// Dummy credentials for login
const dummyUsername = 'admin';
const dummyPassword = 'password123';

// Get elements
const loginForm = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const dashboard = document.getElementById('dashboard');
const loginContainer = document.querySelector('.login-container');
const logoutButton = document.getElementById('logout-button');

// Handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameField.value;
    const password = passwordField.value;

    // Check if credentials are correct
    if (username === dummyUsername && password === dummyPassword) {
        // Hide login form, show dashboard
        loginContainer.classList.add('hidden');
        dashboard.classList.remove('hidden');
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// Handle logout
logoutButton.addEventListener('click', function() {
    // Show login form, hide dashboard
    dashboard.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    usernameField.value = '';
    passwordField.value = '';
    errorMessage.textContent = '';
});
