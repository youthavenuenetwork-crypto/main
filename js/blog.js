// Blog page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadAllBlogs();
});

// Load all blog posts
function loadAllBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const container = document.getElementById('all-blogs-grid');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    blogs.forEach(blog => {
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
                <p>${blog.content.substring(0, 150)}...</p>
            </div>
        `;
        card.onclick = () => {
            localStorage.setItem('currentBlog', JSON.stringify(blog));
            showBlogDetail(blog);
        };
        container.appendChild(card);
    });
}

// Show blog detail
function showBlogDetail(blog) {
    const container = document.getElementById('all-blogs-grid').parentElement;
    const content = `
        <div style="max-width: 800px; margin: 2rem auto; background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
            <button onclick="location.reload()" style="padding: 0.5rem 1rem; background: #006838; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 1rem;">← Back to Blogs</button>
            <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 2rem;">
            <h1 style="color: #006838; margin-bottom: 1rem;">${blog.title}</h1>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; color: #666; font-size: 0.9rem;">
                <span><strong>By:</strong> ${blog.author}</span>
                <span><strong>Category:</strong> ${blog.topic}</span>
                <span><strong>Date:</strong> ${blog.date}</span>
            </div>
            <div style="line-height: 1.8; color: #333;">
                ${blog.content}
            </div>
        </div>
    `;
    document.getElementById('all-blogs-grid').parentElement.innerHTML = content;
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