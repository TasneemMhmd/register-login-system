const logoutBtn = document.getElementById('logout-button');
logoutBtn.addEventListener('click', onClick);

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    document.getElementById('welcome-message').textContent = 'Welcome, ' + user.username + '!';
} else {
    window.location.href = 'login.html';
}

function onClick() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}