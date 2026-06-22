// Register page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if already logged in
    if (localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
    }
});

// Handle registration
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    // Validate
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters!');
        return;
    }
    
    // Get existing users
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists
    if (users.find(u => u.email === email || u.username === username)) {
        showNotification('User already exists!');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        username: username,
        password: password,
        phone: '',
        address: '',
        createdAt: new Date().toLocaleDateString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    showNotification('Registration successful!');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
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