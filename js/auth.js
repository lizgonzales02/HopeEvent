const PROTECTED_PAGES = ['music.html', 'art.html', 'hope.html', 'amazon.html'];
const PASSWORD = 'hope2026';

function checkAuth() {
    const currentPage = window.location.pathname.split('/').pop();
    const hasAuthToken = window.location.search.includes('auth=true');
    
    if (PROTECTED_PAGES.includes(currentPage) && !hasAuthToken) {
        window.location.href = 'login.html?redirect=' + currentPage;
    }
}

function login(password) {
    if (password === PASSWORD) {
        return true;
    }
    return false;
}

function logout() {
    window.location.href = 'index.html';
}

checkAuth();
