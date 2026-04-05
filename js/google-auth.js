// js/google-auth.js
const GOOGLE_CLIENT_ID = "441369597406-rd5rqufmgdt0en20evn3mi9me87ik62t.apps.googleusercontent.com";

function iniciarConGoogle() {
    const redirectUri = encodeURIComponent(window.location.origin + '/procesar-google.html');
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=email%20profile&prompt=select_account`;
    
    sessionStorage.setItem('returnAfterGoogle', window.location.pathname.includes('registro') ? 'registro' : 'login');
    window.location.href = authUrl;
}

function handleGoogleCallback() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    
    if (accessToken) {
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('usuario_apruebaloya', JSON.stringify({
                nombre: user.name,
                email: user.email,
                foto: user.picture,
                autenticado: true,
                provider: 'google'
            }));
            
            const returnTo = sessionStorage.getItem('returnAfterGoogle');
            window.location.href = returnTo === 'registro' ? 'login.html' : 'index.html';
        })
        .catch(error => console.error('Error:', error));
    }
}

// Configurar botones
document.getElementById('googleLoginBtn')?.addEventListener('click', iniciarConGoogle);
document.getElementById('googleRegisterBtn')?.addEventListener('click', iniciarConGoogle);

handleGoogleCallback();