// Login page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if already logged in
    if (localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
    }
});

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Get all users
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showNotification('Login successful!');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showNotification('Invalid username or password!');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #006838;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 2000;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}