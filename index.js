
const modeBtn = document.querySelector('.modebutton');
const body = document.body;
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        modeBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}
modeBtn.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modeBtn.textContent = 'Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        modeBtn.textContent = 'Light Mode';
    }
});
function checkAuthStatus() {
    const user = localStorage.getItem('userToken');
    if (user) {
        if(loginBtn) loginBtn.style.display = 'none';
        if(signupBtn) signupBtn.style.display = 'none';
        if(logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        if(loginBtn) loginBtn.style.display = 'inline-block';
        if(signupBtn) signupBtn.style.display = 'inline-block';
        if(logoutBtn) logoutBtn.style.display = 'none';
    }
}
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName'); 
        
        alert("You have been logged out.");
        window.location.reload(); 
    });
}
window.onload = () => {
    applySavedTheme();
    checkAuthStatus();
};












