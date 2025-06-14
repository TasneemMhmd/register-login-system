const form = document.getElementById('register-form');
form.addEventListener('submit', onSubmit);
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
function onSubmit(e) {
e.preventDefault();
const username = usernameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();
if (username === '' || email === '' || password === '') {
    message.textContent = 'Please fill in all fields';
    message.style.color = 'red';
        return;
}
const user = {
    username,
    email,
    password
}
localStorage.setItem('user', JSON.stringify(user));
message.textContent = 'Registration successful!';
message.style.color = 'green';
form.reset();
}
