// Payment page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadOrderSummary();
});

// Load order summary
function loadOrderSummary() {
    const order = JSON.parse(localStorage.getItem('pendingOrder') || '{}');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id == order.productId);
    
    if (!product) return;
    
    const totalAmount = order.total.replace(' LKR', '');
    const summaryContainer = document.getElementById('order-summary');
    
    summaryContainer.innerHTML = `
        <div class="order-item">
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h4>${product.name}</h4>
                <p>Quantity: ${order.quantity}</p>
                <p>Unit Price: ${product.price} LKR</p>
            </div>
        </div>
        <div class="order-total">Total: ${totalAmount} LKR</div>
    `;
    
    document.getElementById('payment-amount').textContent = totalAmount;
}

// Process payment
function processPayment(e) {
    e.preventDefault();
    
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    
    // Validate inputs
    if (!cardName || !cardNumber || !expiry || !cvv || !email || !address) {
        showNotification('Please fill in all fields');
        return;
    }
    
    // Show processing
    const payBtn = e.target.querySelector('.pay-btn');
    payBtn.disabled = true;
    payBtn.textContent = 'Processing...';
    
    // Simulate payment processing
    setTimeout(() => {
        // Save order
        let orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const order = JSON.parse(localStorage.getItem('pendingOrder') || '{}');
        
        orders.push({
            id: Date.now(),
            ...order,
            cardName: cardName,
            email: email,
            address: address,
            date: new Date().toLocaleDateString(),
            status: 'Completed'
        });
        
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('pendingOrder');
        
        // Show success
        showNotification('Payment successful!');
        
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 1500);
    }, 2000);
}

// Format card number
document.addEventListener('DOMContentLoaded', function() {
    const cardInput = document.getElementById('card-number');
    if (cardInput) {
        cardInput.addEventListener('keyup', function() {
            this.value = this.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        });
    }
    
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('keyup', function() {
            if (this.value.length === 2) {
                this.value += '/';
            }
        });
    }
});

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