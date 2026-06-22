// Profile page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
});

// Load user profile
function loadUserProfile() {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    const user = JSON.parse(currentUser);
    
    document.getElementById('profile-name').textContent = user.name || 'User';
    document.getElementById('profile-email').textContent = user.email || 'email@example.com';
    document.getElementById('profile-phone').textContent = user.phone || '+1 (555) 000-0000';
    
    // Load orders
    loadOrders(user.id);
    
    // Load wishlist
    loadProfileWishlist();
    
    // Load edit form
    loadEditForm(user);
}

// Load user orders
function loadOrders(userId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = orders.filter(o => o.userId === userId || true); // Show all for demo
    const container = document.getElementById('orders-list');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (userOrders.length === 0) {
        container.innerHTML = '<p style="color: #666;">No orders yet</p>';
        return;
    }
    
    userOrders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.innerHTML = `
            <div>
                <h4>Order #${order.id}</h4>
                <p>Amount: ${order.total}</p>
                <p>Date: ${order.date}</p>
                <p>Status: <span style="color: #4caf50;">${order.status}</span></p>
            </div>
        `;
        container.appendChild(orderCard);
    });
}

// Load profile wishlist
function loadProfileWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('profile-wishlist');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (wishlist.length === 0) {
        container.innerHTML = '<p style="color: #666;">No items in wishlist</p>';
        return;
    }
    
    wishlist.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const card = document.createElement('div');
            card.className = 'wishlist-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h4>${product.name}</h4>
                    <p>${product.price} LKR</p>
                    <button onclick="window.location.href = 'checkout.html?product=${product.id}'" style="padding: 0.5rem 1rem; background: #006838; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Buy Now
                    </button>
                </div>
            `;
            container.appendChild(card);
        }
    });
}

// Load edit form
function loadEditForm(user) {
    document.getElementById('edit-name').value = user.name || '';
    document.getElementById('edit-email').value = user.email || '';
    document.getElementById('edit-phone').value = user.phone || '';
    document.getElementById('edit-address').value = user.address || '';
}

// Update profile
function updateProfile(e) {
    e.preventDefault();
    
    const user = {
        ...JSON.parse(localStorage.getItem('currentUser')),
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        phone: document.getElementById('edit-phone').value,
        address: document.getElementById('edit-address').value
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    showNotification('Profile updated successfully!');
    
    setTimeout(() => {
        location.reload();
    }, 1500);
}

// Switch tabs
function switchTab(tabName) {
    document.querySelectorAll('.tab-pane').forEach(tab => {
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