// Settings page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadUserSettings();
});

// Load user settings
function loadUserSettings() {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    const user = JSON.parse(currentUser);
    
    // Account settings
    document.getElementById('settings-name').value = user.name || '';
    document.getElementById('settings-email').value = user.email || '';
    document.getElementById('settings-phone').value = user.phone || '';
    document.getElementById('settings-address').value = user.address || '';
    
    // Load notification preferences
    const prefs = JSON.parse(localStorage.getItem('userPreferences_' + user.email) || '{}');
    document.getElementById('email-notifications').checked = prefs.emailNotifications !== false;
    document.getElementById('sms-notifications').checked = prefs.smsNotifications || false;
    document.getElementById('product-updates').checked = prefs.productUpdates !== false;
    document.getElementById('blog-updates').checked = prefs.blogUpdates !== false;
    document.getElementById('promo-emails').checked = prefs.promoEmails || false;
    
    // Load privacy settings
    document.getElementById('public-profile').checked = prefs.publicProfile || false;
    document.getElementById('show-history').checked = prefs.showHistory !== false;
    document.getElementById('analytics').checked = prefs.analytics || false;
}

// Update account settings
function updateAccountSettings(e) {
    e.preventDefault();
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    const user = {
        ...currentUser,
        name: document.getElementById('settings-name').value,
        email: document.getElementById('settings-email').value,
        phone: document.getElementById('settings-phone').value,
        address: document.getElementById('settings-address').value
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    showNotification('Account settings updated!');
}

// Save notification settings
function saveNotificationSettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    const prefs = {
        emailNotifications: document.getElementById('email-notifications').checked,
        smsNotifications: document.getElementById('sms-notifications').checked,
        productUpdates: document.getElementById('product-updates').checked,
        blogUpdates: document.getElementById('blog-updates').checked,
        promoEmails: document.getElementById('promo-emails').checked
    };
    
    localStorage.setItem('userPreferences_' + currentUser.email, JSON.stringify(prefs));
    showNotification('Notification preferences saved!');
}

// Update password
function updatePassword(e) {
    e.preventDefault();
    
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser.password !== currentPassword) {
        showNotification('Current password is incorrect!');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showNotification('New passwords do not match!');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('Password must be at least 6 characters!');
        return;
    }
    
    currentUser.password = newPassword;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    e.target.reset();
    showNotification('Password updated successfully!');
}

// Save privacy settings
function savePrivacySettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    const prefs = JSON.parse(localStorage.getItem('userPreferences_' + currentUser.email) || '{}');
    
    prefs.publicProfile = document.getElementById('public-profile').checked;
    prefs.showHistory = document.getElementById('show-history').checked;
    prefs.analytics = document.getElementById('analytics').checked;
    
    localStorage.setItem('userPreferences_' + currentUser.email, JSON.stringify(prefs));
    showNotification('Privacy settings saved!');
}

// Switch settings tabs
function switchSettingsTab(tabName) {
    document.querySelectorAll('.settings-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');
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