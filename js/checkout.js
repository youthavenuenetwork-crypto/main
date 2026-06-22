// Checkout page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadProductCheckout();
});

// Load product for checkout
function loadProductCheckout() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('product'));
    
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('product-details').innerHTML = '<p>Product not found</p>';
        return;
    }
    
    const detailsContainer = document.getElementById('product-details');
    detailsContainer.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        <div class="product-detail-info">
            <h2>${product.name}</h2>
            <p style="color: #666; margin-bottom: 1rem;">${product.description}</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div>
                    <strong>Category:</strong> ${product.category}
                </div>
                <div>
                    <strong>Rating:</strong> ${product.rating}/5 (${product.reviews} reviews)
                </div>
                <div>
                    <strong>Sold:</strong> ${product.sold} units
                </div>
                <div>
                    <strong>Availability:</strong> In Stock
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('product-price').textContent = product.price + ' LKR';
    updateCheckoutTotal(product.price);
}

// Update total price
function updateCheckoutTotal(price) {
    const quantity = document.getElementById('quantity').value || 1;
    const total = price * quantity;
    document.getElementById('total-price').textContent = total + ' LKR';
}

// Proceed to payment
function proceedToPayment() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    const quantity = document.getElementById('quantity').value || 1;
    const total = document.getElementById('total-price').textContent;
    
    localStorage.setItem('pendingOrder', JSON.stringify({
        productId: productId,
        quantity: quantity,
        total: total
    }));
    
    window.location.href = 'payment.html';
}

// Listen for quantity change
document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            const params = new URLSearchParams(window.location.search);
            const productId = parseInt(params.get('product'));
            const products = JSON.parse(localStorage.getItem('products') || '[]');
            const product = products.find(p => p.id === productId);
            if (product) {
                updateCheckoutTotal(product.price);
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