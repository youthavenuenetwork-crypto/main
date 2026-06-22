// Admin panel functionality
document.addEventListener('DOMContentLoaded', function() {
    loadAdminDashboard();
    setupAdminTabs();
});

// Setup admin tab switching
function setupAdminTabs() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.classList.contains('logout')) return;
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (href) {
                const tabId = href.substring(1);
                switchAdminTab(tabId);
            }
        });
    });
}

// Switch admin tab
function switchAdminTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected tab
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.classList.add('active');
    }
    
    // Activate nav item
    const navItem = document.querySelector(`[href="#${tabId}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Load specific data
    if (tabId === 'products') {
        loadProductsTable();
    } else if (tabId === 'blogs') {
        loadBlogsTable();
    } else if (tabId === 'ads') {
        loadAdsTable();
    } else if (tabId === 'videos') {
        loadVideosTable();
    } else if (tabId === 'users') {
        loadUsersTable();
    }
}

// Load admin dashboard
function loadAdminDashboard() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Calculate total sales
    let totalSales = 0;
    orders.forEach(order => {
        const amount = parseInt(order.total.replace(' LKR', '').replace(/,/g, '')) || 0;
        totalSales += amount;
    });
    
    document.getElementById('total-sales').textContent = totalSales.toLocaleString() + ' LKR';
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('total-users').textContent = users.length;
    document.getElementById('total-blogs').textContent = blogs.length;
}

// ============ PRODUCTS MANAGEMENT ============

let editingProductId = null;

function showProductForm() {
    editingProductId = null;
    document.getElementById('product-name').value = '';
    document.getElementById('product-label').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rental-price').value = '';
    document.getElementById('product-rating').value = '';
    document.getElementById('product-reviews').value = '';
    document.getElementById('product-sold').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-form').style.display = 'block';
}

function hideProductForm() {
    document.getElementById('product-form').style.display = 'none';
}

function saveProduct(e) {
    e.preventDefault();
    
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    
    const product = {
        id: editingProductId || Math.max(...products.map(p => p.id), 0) + 1,
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-label').value,
        price: parseInt(document.getElementById('product-price').value),
        rentalPrice: parseInt(document.getElementById('product-rental-price').value),
        rating: parseFloat(document.getElementById('product-rating').value),
        reviews: parseInt(document.getElementById('product-reviews').value),
        sold: parseInt(document.getElementById('product-sold').value),
        description: document.getElementById('product-description').value,
        image: document.getElementById('product-image').value
    };
    
    if (editingProductId) {
        const index = products.findIndex(p => p.id === editingProductId);
        if (index !== -1) {
            products[index] = product;
        }
    } else {
        products.push(product);
    }
    
    localStorage.setItem('products', JSON.stringify(products));
    showAdminNotification('Product saved successfully!');
    hideProductForm();
    loadProductsTable();
    loadAdminDashboard();
}

function loadProductsTable() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const tbody = document.getElementById('products-tbody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price} LKR</td>
            <td>${product.rating}/5</td>
            <td>${product.sold}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${product.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editProduct(id) {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id === id);
    
    if (product) {
        editingProductId = id;
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-label').value = product.category;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-rental-price').value = product.rentalPrice;
        document.getElementById('product-rating').value = product.rating;
        document.getElementById('product-reviews').value = product.reviews;
        document.getElementById('product-sold').value = product.sold;
        document.getElementById('product-description').value = product.description;
        document.getElementById('product-image').value = product.image;
        document.getElementById('product-form').style.display = 'block';
    }
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        showAdminNotification('Product deleted!');
        loadProductsTable();
        loadAdminDashboard();
    }
}

// ============ BLOGS MANAGEMENT ============

let editingBlogId = null;

function showBlogForm() {
    editingBlogId = null;
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-topic').value = '';
    document.getElementById('blog-content').value = '';
    document.getElementById('blog-image').value = '';
    document.getElementById('blog-author').value = '';
    document.getElementById('blog-form').style.display = 'block';
}

function hideBlogForm() {
    document.getElementById('blog-form').style.display = 'none';
}

function saveBlog(e) {
    e.preventDefault();
    
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    
    const blog = {
        id: editingBlogId || Math.max(...blogs.map(b => b.id), 0) + 1,
        title: document.getElementById('blog-title').value,
        topic: document.getElementById('blog-topic').value,
        content: document.getElementById('blog-content').value,
        image: document.getElementById('blog-image').value,
        author: document.getElementById('blog-author').value,
        date: new Date().toLocaleDateString()
    };
    
    if (editingBlogId) {
        const index = blogs.findIndex(b => b.id === editingBlogId);
        if (index !== -1) {
            blogs[index] = blog;
        }
    } else {
        blogs.push(blog);
    }
    
    localStorage.setItem('blogs', JSON.stringify(blogs));
    showAdminNotification('Blog post saved successfully!');
    hideBlogForm();
    loadBlogsTable();
    loadAdminDashboard();
}

function loadBlogsTable() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const tbody = document.getElementById('blogs-tbody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    blogs.forEach(blog => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${blog.image}" alt="${blog.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
            <td>${blog.title}</td>
            <td>${blog.topic}</td>
            <td>${blog.author}</td>
            <td>${blog.date}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editBlog(${blog.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteBlog(${blog.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editBlog(id) {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const blog = blogs.find(b => b.id === id);
    
    if (blog) {
        editingBlogId = id;
        document.getElementById('blog-title').value = blog.title;
        document.getElementById('blog-topic').value = blog.topic;
        document.getElementById('blog-content').value = blog.content;
        document.getElementById('blog-image').value = blog.image;
        document.getElementById('blog-author').value = blog.author;
        document.getElementById('blog-form').style.display = 'block';
    }
}

function deleteBlog(id) {
    if (confirm('Are you sure you want to delete this blog post?')) {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs = blogs.filter(b => b.id !== id);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        showAdminNotification('Blog post deleted!');
        loadBlogsTable();
        loadAdminDashboard();
    }
}

// ============ ADS MANAGEMENT ============

let editingAdId = null;

function showAdForm() {
    editingAdId = null;
    document.getElementById('ad-title').value = '';
    document.getElementById('ad-description').value = '';
    document.getElementById('ad-image').value = '';
    document.getElementById('ad-button-text').value = '';
    document.getElementById('ad-button-link').value = '';
    document.getElementById('ad-form').style.display = 'block';
}

function hideAdForm() {
    document.getElementById('ad-form').style.display = 'none';
}

function saveAd(e) {
    e.preventDefault();
    
    const ads = JSON.parse(localStorage.getItem('ads') || '[]');
    
    const ad = {
        id: editingAdId || Math.max(...ads.map(a => a.id), 0) + 1,
        title: document.getElementById('ad-title').value,
        description: document.getElementById('ad-description').value,
        image: document.getElementById('ad-image').value,
        buttonText: document.getElementById('ad-button-text').value,
        buttonLink: document.getElementById('ad-button-link').value
    };
    
    if (editingAdId) {
        const index = ads.findIndex(a => a.id === editingAdId);
        if (index !== -1) {
            ads[index] = ad;
        }
    } else {
        ads.push(ad);
    }
    
    localStorage.setItem('ads', JSON.stringify(ads));
    showAdminNotification('Ad saved successfully!');
    hideAdForm();
    loadAdsTable();
}

function loadAdsTable() {
    const ads = JSON.parse(localStorage.getItem('ads') || '[]');
    const tbody = document.getElementById('ads-tbody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    ads.forEach(ad => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${ad.image}" alt="${ad.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
            <td>${ad.title}</td>
            <td>${ad.description.substring(0, 50)}...</td>
            <td>${ad.buttonText}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editAd(${ad.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteAd(${ad.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editAd(id) {
    const ads = JSON.parse(localStorage.getItem('ads') || '[]');
    const ad = ads.find(a => a.id === id);
    
    if (ad) {
        editingAdId = id;
        document.getElementById('ad-title').value = ad.title;
        document.getElementById('ad-description').value = ad.description;
        document.getElementById('ad-image').value = ad.image;
        document.getElementById('ad-button-text').value = ad.buttonText;
        document.getElementById('ad-button-link').value = ad.buttonLink;
        document.getElementById('ad-form').style.display = 'block';
    }
}

function deleteAd(id) {
    if (confirm('Are you sure you want to delete this ad?')) {
        let ads = JSON.parse(localStorage.getItem('ads') || '[]');
        ads = ads.filter(a => a.id !== id);
        localStorage.setItem('ads', JSON.stringify(ads));
        showAdminNotification('Ad deleted!');
        loadAdsTable();
    }
}

// ============ VIDEOS MANAGEMENT ============

let editingVideoId = null;

function showVideoForm() {
    editingVideoId = null;
    document.getElementById('video-title').value = '';
    document.getElementById('video-url').value = '';
    document.getElementById('video-description').value = '';
    document.getElementById('video-form').style.display = 'block';
}

function hideVideoForm() {
    document.getElementById('video-form').style.display = 'none';
}

function saveVideo(e) {
    e.preventDefault();
    
    const videos = JSON.parse(localStorage.getItem('videos') || '[]');
    
    const video = {
        id: editingVideoId || Math.max(...videos.map(v => v.id), 0) + 1,
        title: document.getElementById('video-title').value,
        url: document.getElementById('video-url').value,
        description: document.getElementById('video-description').value
    };
    
    if (editingVideoId) {
        const index = videos.findIndex(v => v.id === editingVideoId);
        if (index !== -1) {
            videos[index] = video;
        }
    } else {
        videos.push(video);
    }
    
    localStorage.setItem('videos', JSON.stringify(videos));
    showAdminNotification('Video saved successfully!');
    hideVideoForm();
    loadVideosTable();
}

function loadVideosTable() {
    const videos = JSON.parse(localStorage.getItem('videos') || '[]');
    const tbody = document.getElementById('videos-tbody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    videos.forEach(video => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${video.title}</td>
            <td><a href="${video.url}" target="_blank" style="color: #006838;">${video.url.substring(0, 30)}...</a></td>
            <td>${video.description || 'N/A'}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editVideo(${video.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteVideo(${video.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editVideo(id) {
    const videos = JSON.parse(localStorage.getItem('videos') || '[]');
    const video = videos.find(v => v.id === id);
    
    if (video) {
        editingVideoId = id;
        document.getElementById('video-title').value = video.title;
        document.getElementById('video-url').value = video.url;
        document.getElementById('video-description').value = video.description || '';
        document.getElementById('video-form').style.display = 'block';
    }
}

function deleteVideo(id) {
    if (confirm('Are you sure you want to delete this video?')) {
        let videos = JSON.parse(localStorage.getItem('videos') || '[]');
        videos = videos.filter(v => v.id !== id);
        localStorage.setItem('videos', JSON.stringify(videos));
        showAdminNotification('Video deleted!');
        loadVideosTable();
    }
}

// ============ USERS MANAGEMENT ============

function loadUsersTable() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const tbody = document.getElementById('users-tbody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone || 'N/A'}</td>
            <td>${user.createdAt}</td>
            <td><span style="color: #4caf50; font-weight: 600;">Active</span></td>
            <td>
                <button class="action-btn view-btn" onclick="alert('User Details:\nName: ${user.name}\nEmail: ${user.email}\nJoined: ${user.createdAt}')">View</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// ============ SETTINGS ============

function saveAdminSettings(e) {
    e.preventDefault();
    
    const settings = {
        siteName: document.getElementById('site-name').value,
        siteEmail: document.getElementById('site-email').value,
        sitePhone: document.getElementById('site-phone').value,
        primaryColor: document.getElementById('primary-color').value,
        secondaryColor: document.getElementById('secondary-color').value
    };
    
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    
    // Apply colors
    document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', settings.secondaryColor);
    
    showAdminNotification('Settings saved successfully!');
}

// ============ ADMIN LOGOUT ============

function adminLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminUser');
        showAdminNotification('Logging out...');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
}

// ============ NOTIFICATIONS ============

function showAdminNotification(message) {
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