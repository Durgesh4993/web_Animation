// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password input values
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate the input fields
    if (username.trim() === '' || password.trim() === '') {
        showError('Please enter a username and password.');
    } else {
        // Simulate an asynchronous login process (replace this with your actual login logic)
        simulateLogin(username, password);
    }
}

// Function to simulate a login (replace with actual login logic)
function simulateLogin(username, password) {
    // Simulate a delay, e.g., making an API request
    setTimeout(() => {
        // Check if the username and password are valid (replace this with your own validation logic)
        if (username === 'your_username' && password === 'your_password') {
            showSuccess('Login successful!');
        } else {
            showError('Invalid username or password.');
        }
    }, 1000); // Simulate a 1-second delay
}

// Function to show a success message
function showSuccess(message) {
    const successMessage = document.querySelector('.success-message');
    successMessage.textContent = message;
    successMessage.style.display = 'block';

    // Clear the input fields
    clearInputFields();
}

// Function to show an error message
function showError(message) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Function to clear input fields
function clearInputFields() {
    document.querySelector('input[name="username"]').value = '';
    document.querySelector('input[name="password"]').value = '';
}

// Add event listener to the form for form submission
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleLogin);

// Hide success and error messages on input focus
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="username"]');

usernameInput.addEventListener('focus', () => {
    const successMessage = document.querySelector('.success-message');
    successMessage.style.display = 'none';
    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'none';
});

passwordInput.addEventListener('focus', () => {
    const successMessage = document.querySelector('.success-message');
    successMessage.style.display = 'none';
    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'none';
});
