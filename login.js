const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', onLoginSubmit);
const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');
const loginMessage = document.getElementById('message');

function onLoginSubmit(e) {
    e.preventDefault();
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();
    if (email === '' || password === '') {
        loginMessage.textContent = 'Please fill in all fields';
        loginMessage.style.color = 'red';
        return;
    }
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.email !== email || user.password !== password) {
        loginMessage.textContent = 'Invalid email or password';
        loginMessage.style.color = 'red';
        return;
    } 
loginMessage.textContent = 'Welcome, ' + user.username + '!';
    loginMessage.style.color = 'green';
    loginForm.reset();
}