// Sample data for Urban Roots E-Commerce

// Sample Products
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

// Sample Blog Posts
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

// Initialize LocalStorage with sample data if it doesn't exist
function initializeSampleData() {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(sampleProducts));
    }
    if (!localStorage.getItem('blogs')) {
        localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
    }
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
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

// Call this when page loads
document.addEventListener('DOMContentLoaded', initializeSampleData);