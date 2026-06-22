// Initialize sample data on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
    loadNavbarData();
    setupDropdownMenus();
    loadWishlistBadge();
    loadHomePageData();
});

// Initialize sample data if not exists
function initializeSampleData() {
    if (!localStorage.getItem('products')) {
        const sampleProducts = [
            {
                id: 1,
                name: 'Monstera Deliciosa',
                category: 'Indoor',
                price: 4500,
                rentalPrice: 1500,
                rating: 4.8,
                reviews: 124,
                sold: 850,
                image: 'https://via.placeholder.com/250x250?text=Monstera+Deliciosa',
                description: 'Known as the Swiss Cheese Plant, this iconic tropical beauty features stunning fenestrated leaves. It thrives in indirect light and adds a lush, modern aesthetic to any interior living space effortlessly.'
            },
            {
                id: 2,
                name: 'Pothos (Devil\'s Ivy)',
                category: 'Indoor',
                price: 2500,
                rentalPrice: 800,
                rating: 4.6,
                reviews: 89,
                sold: 650,
                image: 'https://via.placeholder.com/250x250?text=Pothos',
                description: 'A trailing plant with heart-shaped leaves, perfect for hanging baskets and shelves. Low maintenance and air-purifying, ideal for beginners and offices.'
            },
            {
                id: 3,
                name: 'Snake Plant',
                category: 'Indoor',
                price: 3000,
                rentalPrice: 1000,
                rating: 4.9,
                reviews: 156,
                sold: 920,
                image: 'https://via.placeholder.com/250x250?text=Snake+Plant',
                description: 'Extremely durable and air-purifying. Can tolerate low light and irregular watering, making it perfect for offices and neglectful plant parents.'
            },
            {
                id: 4,
                name: 'Fiddle Leaf Fig',
                category: 'Large',
                price: 6500,
                rentalPrice: 2000,
                rating: 4.7,
                reviews: 102,
                sold: 420,
                image: 'https://via.placeholder.com/250x250?text=Fiddle+Leaf+Fig',
                description: 'A statement plant with large, violin-shaped leaves. Requires bright, indirect light and careful watering but creates a stunning focal point in any room.'
            },
            {
                id: 5,
                name: 'Jade Plant',
                category: 'Succulents',
                price: 2000,
                rentalPrice: 650,
                rating: 4.5,
                reviews: 78,
                sold: 580,
                image: 'https://via.placeholder.com/250x250?text=Jade+Plant',
                description: 'A hardy succulent with thick, fleshy leaves. Low maintenance, drought-tolerant, and considered lucky in many cultures.'
            },
            {
                id: 6,
                name: 'Peace Lily',
                category: 'Indoor',
                price: 3500,
                rentalPrice: 1100,
                rating: 4.6,
                reviews: 95,
                sold: 670,
                image: 'https://via.placeholder.com/250x250?text=Peace+Lily',
                description: 'Elegant white flowers bloom above dark green foliage. Thrives in low light and helps purify the air. Signals when it needs water by drooping.'
            },
            {
                id: 7,
                name: 'Rubber Plant',
                category: 'Large',
                price: 5500,
                rentalPrice: 1800,
                rating: 4.7,
                reviews: 88,
                sold: 380,
                image: 'https://via.placeholder.com/250x250?text=Rubber+Plant',
                description: 'A bold plant with large, glossy green leaves. Makes an excellent statement piece and is relatively easy to care for with bright, indirect light.'
            },
            {
                id: 8,
                name: 'Aloe Vera',
                category: 'Succulents',
                price: 1500,
                rentalPrice: 500,
                rating: 4.8,
                reviews: 134,
                sold: 1200,
                image: 'https://via.placeholder.com/250x250?text=Aloe+Vera',
                description: 'Medicinal succulent with gel-filled leaves. Easy to grow, drought-tolerant, and functional for treating minor burns and skin irritations.'
            },
            {
                id: 9,
                name: 'Boston Fern',
                category: 'Indoor',
                price: 3200,
                rentalPrice: 1000,
                rating: 4.4,
                reviews: 67,
                sold: 420,
                image: 'https://via.placeholder.com/250x250?text=Boston+Fern',
                description: 'Delicate, feathery fronds create a soft, tropical appearance. Prefers humidity and indirect light, perfect for bathrooms and shaded corners.'
            },
            {
                id: 10,
                name: 'Spider Plant',
                category: 'Indoor',
                price: 2200,
                rentalPrice: 700,
                rating: 4.7,
                reviews: 112,
                sold: 890,
                image: 'https://via.placeholder.com/250x250?text=Spider+Plant',
                description: 'Popular and easy to grow. Produces adorable baby plantlets and is excellent at purifying air. Great for beginners and pet-friendly.'
            }
        ];
        localStorage.setItem('products', JSON.stringify(sampleProducts));
    }

    if (!localStorage.getItem('blogs')) {
        const sampleBlogs = [
            {
                id: 1,
                title: '10 Best Indoor Plants for Your Home',
                topic: 'Indoor Gardening',
                content: 'Discover the top 10 indoor plants that not only beautify your space but also improve air quality. From low-maintenance succulents to statement-making fiddle leaf figs, learn which plants are perfect for your lifestyle and home conditions.',
                author: 'Sarah Green',
                image: 'https://via.placeholder.com/400x300?text=Indoor+Plants',
                date: '2024-06-15'
            },
            {
                id: 2,
                title: 'Plant Care 101: Watering Tips',
                topic: 'Plant Care',
                content: 'Overwatering is one of the most common mistakes plant parents make. Learn how to determine when your plants need water, the best watering techniques, and how to adjust for different seasons and plant types.',
                author: 'James Plant',
                image: 'https://via.placeholder.com/400x300?text=Watering+Tips',
                date: '2024-06-10'
            },
            {
                id: 3,
                title: 'Creating a Succulent Garden',
                topic: 'Succulents',
                content: 'Succulents are perfect for busy plant parents. Learn how to create a beautiful succulent garden, arrange different varieties, and care for these drought-tolerant beauties in any climate.',
                author: 'Emma Stone',
                image: 'https://via.placeholder.com/400x300?text=Succulent+Garden',
                date: '2024-06-05'
            },
            {
                id: 4,
                title: 'Propagating Your Favorite Plants',
                topic: 'Plant Propagation',
                content: 'Expand your collection for free! Learn various propagation methods including water propagation, leaf cuttings, and division. Create multiple plants from one and share with friends.',
                author: 'Michael Green',
                image: 'https://via.placeholder.com/400x300?text=Propagation',
                date: '2024-05-28'
            },
            {
                id: 5,
                title: 'The Benefits of Plants for Mental Health',
                topic: 'Wellness',
                content: 'Did you know that indoor plants can boost your mood and productivity? Explore the science behind how plants improve air quality, reduce stress, and create a calming environment in your home or office.',
                author: 'Dr. Lisa Chen',
                image: 'https://via.placeholder.com/400x300?text=Plant+Wellness',
                date: '2024-05-20'
            },
            {
                id: 6,
                title: 'Dealing with Common Plant Pests',
                topic: 'Plant Health',
                content: 'Spider mites, mealybugs, and scale insects can damage your beloved plants. Learn to identify common pests and discover natural, effective methods to treat infestations without harsh chemicals.',
                author: 'Robert Bloom',
                image: 'https://via.placeholder.com/400x300?text=Plant+Pests',
                date: '2024-05-15'
            },
            {
                id: 7,
                title: 'Low Light Plants: Best Options',
                topic: 'Indoor Gardening',
                content: 'Not all homes have bright, sunny windows. Discover the best plants that thrive in low light conditions and can transform your dark corners into lush green spaces.',
                author: 'Angela Wood',
                image: 'https://via.placeholder.com/400x300?text=Low+Light+Plants',
                date: '2024-05-10'
            },
            {
                id: 8,
                title: 'Humidity and Your Houseplants',
                topic: 'Plant Care',
                content: 'Many tropical plants love humidity. Learn how to increase humidity levels in your home, which plants prefer high humidity, and simple tricks like grouping plants together.',
                author: 'Sophia Leaf',
                image: 'https://via.placeholder.com/400x300?text=Plant+Humidity',
                date: '2024-05-05'
            },
            {
                id: 9,
                title: 'Seasonal Plant Care Guide',
                topic: 'Plant Care',
                content: 'Different seasons require different plant care strategies. Understand how to adjust watering, fertilizing, and lighting throughout the year to keep your plants thriving in every season.',
                author: 'Thomas Green',
                image: 'https://via.placeholder.com/400x300?text=Seasonal+Care',
                date: '2024-04-28'
            },
            {
                id: 10,
                title: 'Starting a Garden from Seeds',
                topic: 'Gardening',
                content: 'Growing plants from seeds is rewarding and economical. Learn about seed starting techniques, timing, soil requirements, and how to care for seedlings until they\'re ready to transplant.',
                author: 'Kevin Seed',
                image: 'https://via.placeholder.com/400x300?text=Seeds+Growing',
                date: '2024-04-20'
            }
        ];
        localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
    }

    if (!localStorage.getItem('wishlist')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }
    if (!localStorage.getItem('ads')) {
        localStorage.setItem('ads', JSON.stringify([]));
    }
    if (!localStorage.getItem('videos')) {
        localStorage.setItem('videos', JSON.stringify([]));
    }
}

// Load navbar data and setup
function loadNavbarData() {
    const isLoggedIn = localStorage.getItem('currentUser');
    if (isLoggedIn) {
        const user = JSON.parse(isLoggedIn);
        // Update profile if needed
    }
}

// Setup dropdown menu interactions
function setupDropdownMenus() {
    const wishlistBtn = document.getElementById('wishlist-btn');
    const notificationsBtn = document.getElementById('notifications-btn');
    const profileBtn = document.getElementById('profile-btn');

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            loadWishlistDropdown();
        });
    }

    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            loadNotificationsDropdown();
        });
    }

    document.addEventListener('click', function() {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
}

// Load wishlist dropdown
function loadWishlistDropdown() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('wishlist-items-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (wishlist.length === 0) {
        container.innerHTML = '<p style="padding: 1rem; text-align: center; color: #666;">No items in wishlist</p>';
        return;
    }

    let totalPrice = 0;
    wishlist.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            totalPrice += product.price;
            const item = document.createElement('div');
            item.className = 'wishlist-item';
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="wishlist-info">
                    <h4>${product.name}</h4>
                    <p>${product.price} LKR</p>
                </div>
            `;
            item.onclick = () => {
                window.location.href = 'checkout.html?product=' + product.id;
            };
            container.appendChild(item);
        }
    });
}

// Load notifications dropdown
function loadNotificationsDropdown() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('notifications-list');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    // Show latest 5 products
    const latestProducts = products.slice(-5).reverse();
    
    latestProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'notification-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="notification-info">
                <h4>New: ${product.name}</h4>
                <p>${product.price} LKR</p>
            </div>
        `;
        item.onclick = () => {
            window.location.href = 'checkout.html?product=' + product.id;
        };
        container.appendChild(item);
    });
}

// Load wishlist badge count
function loadWishlistBadge() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    // Badge is already shown in HTML, just keeping for reference
}

// Add to wishlist
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
}

// Load home page data
function loadHomePageData() {
    const carousel = document.getElementById('blog-carousel');
    const recentProducts = document.getElementById('recent-products');
    const blogsGrid = document.getElementById('blogs-grid');
    const adSection = document.getElementById('ad-section');
    const videosGrid = document.getElementById('videos-grid');

    if (carousel) {
        loadBlogCarousel();
    }
    if (recentProducts) {
        loadRecentProducts();
    }
    if (blogsGrid) {
        loadBlogsSection();
    }
    if (adSection) {
        loadAdsSection();
    }
    if (videosGrid) {
        loadVideosSection();
    }
}

// Load blog carousel
function loadBlogCarousel() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const carousel = document.getElementById('blog-carousel');
    
    if (!carousel) return;
    
    carousel.innerHTML = '';
    
    blogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <div style="position: relative;">
                <img src="${blog.image}" alt="${blog.title}" class="blog-card-image" style="width: 100%; height: 200px; object-fit: cover;">
                <div class="blog-label">Blog</div>
            </div>
            <div class="blog-card-content">
                <h3>${blog.title}</h3>
                <p>${blog.topic}</p>
                <p>${blog.content.substring(0, 35)}...</p>
            </div>
        `;
        card.onclick = () => {
            localStorage.setItem('currentBlog', JSON.stringify(blog));
            window.location.href = 'blog.html?id=' + blog.id;
        };
        carousel.appendChild(card);
    });
}

// Load recent products
function loadRecentProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('recent-products');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    // Show first 10 products
    products.slice(0, 10).forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Create product card
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

// Load blogs section
function loadBlogsSection() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const container = document.getElementById('blogs-grid');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    blogs.slice(0, 10).forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-post-card';
        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-post-image">
            <div class="blog-post-content">
                <h3>${blog.title}</h3>
                <div class="blog-post-meta">
                    <span>${blog.author}</span>
                    <span>${blog.date}</span>
                </div>
                <p>${blog.content.substring(0, 100)}...</p>
            </div>
        `;
        card.onclick = () => {
            localStorage.setItem('currentBlog', JSON.stringify(blog));
            window.location.href = 'blog.html?id=' + blog.id;
        };
        container.appendChild(card);
    });
}

// Load ads section
function loadAdsSection() {
    const ads = JSON.parse(localStorage.getItem('ads') || '[]');
    const container = document.getElementById('ad-section');
    
    if (!container || ads.length === 0) return;
    
    const ad = ads[0]; // Show first ad
    container.innerHTML = `
        <div class="ad-card">
            <img src="${ad.image}" alt="${ad.title}" class="ad-image">
            <div class="ad-content">
                <h2>${ad.title}</h2>
                <p>${ad.description}</p>
                <button class="ad-button" onclick="window.location.href = '${ad.buttonLink}'">${ad.buttonText}</button>
            </div>
        </div>
    `;
}

// Load videos section
function loadVideosSection() {
    const videos = JSON.parse(localStorage.getItem('videos') || '[]');
    const container = document.getElementById('videos-grid');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (videos.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">No videos added yet</p>';
        return;
    }
    
    videos.forEach(video => {
        const videoId = extractYouTubeId(video.url);
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <iframe class="video-iframe" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            <h3>${video.title}</h3>
        `;
        container.appendChild(card);
    });
}

// Extract YouTube ID from URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Carousel navigation
let currentSlide = 0;
function nextSlide() {
    const carousel = document.getElementById('blog-carousel');
    if (carousel) {
        carousel.scrollBy({ left: 320, behavior: 'smooth' });
    }
}

function prevSlide() {
    const carousel = document.getElementById('blog-carousel');
    if (carousel) {
        carousel.scrollBy({ left: -320, behavior: 'smooth' });
    }
}

// Subscribe to newsletter
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    localStorage.setItem('newsletter_' + email, 'true');
    showNotification('Thank you for subscribing!');
    e.target.reset();
}

// Logout
function logout() {
    if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('currentUser');
        showNotification('Logging out...');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
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
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);