// Shop page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadShopFilters();
    loadShopProducts();
});

let selectedCategory = null;

// Load filter buttons
function loadShopFilters() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const filterContainer = document.getElementById('filter-buttons');
    
    if (!filterContainer) return;
    
    // Get unique categories
    const categories = [...new Set(products.map(p => p.category))];
    
    filterContainer.innerHTML = '';
    
    // Add "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'All';
    allBtn.onclick = () => {
        selectedCategory = null;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        allBtn.classList.add('active');
        loadShopProducts();
    };
    filterContainer.appendChild(allBtn);
    
    // Add category buttons
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = category;
        btn.onclick = () => {
            selectedCategory = category;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadShopProducts();
        };
        filterContainer.appendChild(btn);
    });
}

// Load products with filter
function loadShopProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('shop-products');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    let filteredProducts = products;
    
    if (selectedCategory) {
        filteredProducts = products.filter(p => p.category === selectedCategory);
    }
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">No products found</p>';
    }
}

// Helper function to create product card (imported from main.js)
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isInWishlist = wishlist.includes(product.id);
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-label">${product.category}</div>
            <button class="heart-icon ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); addToWishlist(${product.id})">
                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price} LKR</div>
            <div class="product-rental">Price (3 Months): ${product.rentalPrice} LKR/month</div>
            <div class="product-rating">
                <span class="stars">★★★★★</span>
                <span>${product.rating}/5 (${product.reviews})</span>
            </div>
            <div class="product-stats">
                <span>Sold: ${product.sold}</span>
            </div>
            <p class="product-description">${product.description}</p>
        </div>
    `;
    
    card.onclick = () => {
        window.location.href = 'checkout.html?product=' + product.id;
    };
    
    return card;
}

// Add to wishlist function
function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Added to wishlist!');
    } else {
        wishlist = wishlist.filter(id => id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Removed from wishlist!');
    }
    
    // Reload to update heart icon
    loadShopProducts();
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