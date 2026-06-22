# Urban Roots E-Commerce Website

A modern, fully-featured e-commerce website for premium plants and gardening solutions.

## Features

### User Features
- **User Authentication**: Login and registration system
- **Product Catalog**: Browse and filter plants by category
- **Shopping Cart & Wishlist**: Add products to favorites
- **Product Details**: View detailed product information with ratings and reviews
- **Checkout System**: Multi-step checkout process
- **Payment Integration**: Secure payment form
- **User Profile**: Manage account information and view order history
- **Blog Section**: Read gardening tips and plant care articles
- **Notifications**: Get alerts about new products
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Admin Features
- **Dashboard**: Overview of sales, products, users, and blog posts
- **Product Management**: Add, edit, and delete products
- **Blog Management**: Create and manage blog posts
- **Ad Management**: Create promotional ads with custom links
- **Video Management**: Embed YouTube videos
- **User Management**: Monitor registered users
- **Settings**: Configure site-wide settings and theme colors

## Project Structure

```
urban-roots/
├── index.html          # Home page
├── shop.html           # Product shop
├── blog.html           # Blog listing
├── checkout.html       # Product checkout
├── payment.html        # Payment page
├── profile.html        # User profile
├── settings.html       # User settings
├── login.html          # Login page
├── register.html       # Registration page
├── admin.html          # Admin dashboard
├── css/
│   ├── style.css       # Main styles
│   └── admin-style.css # Admin styles
├── js/
│   ├── main.js         # Main JavaScript
│   ├── shop.js         # Shop functionality
│   ├── checkout.js     # Checkout functionality
│   ├── payment.js      # Payment functionality
│   ├── profile.js      # Profile functionality
│   ├── settings.js     # Settings functionality
│   ├── login.js        # Login functionality
│   ├── register.js     # Registration functionality
│   ├── blog.js         # Blog functionality
│   └── admin.js        # Admin functionality
├── images/             # Images directory
│   ├── logo.png        # Urban Roots Logo
│   └── pp.png          # Profile picture placeholder
└── README.md
```

## Color Scheme

- **Primary Color**: #006838 (Green)
- **Secondary Color**: #55833d (Darker Green)
- **Accent Color**: #8cc342 (Light Green)
- **Background**: #ffffff (White)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/youthavenuenetwork-crypto/main.git
```

2. Navigate to the project directory:
```bash
cd main
```

3. Open `index.html` in your web browser

### Local Storage

The website uses browser's localStorage to persist data:
- User accounts and authentication
- Products and inventory
- Blog posts
- User wishlist and cart
- Settings and preferences

## Usage

### For Users

1. **Register/Login**: Create an account or sign in
2. **Browse Products**: Explore the shop and filter by category
3. **Add to Wishlist**: Click the heart icon on products
4. **Checkout**: Select a product and proceed to checkout
5. **Payment**: Complete the purchase with card details
6. **Profile**: View orders and manage account settings

### For Admins

1. **Access Admin Panel**: Go to `admin.html`
2. **Dashboard**: View key metrics
3. **Manage Products**: Add, edit, or delete products
4. **Manage Blogs**: Create and publish blog posts
5. **Manage Ads**: Create promotional content
6. **Embed Videos**: Add YouTube videos to the home page
7. **Settings**: Configure site information and colors

## API Endpoints (Mock)

The application currently uses localStorage for data persistence. For production, integrate with:

- User management API
- Product catalog API
- Payment processing (Stripe, PayPal)
- Email notification service

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage API
- Font Awesome Icons
- Responsive Web Design

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration with Node.js/Express
- Database integration (MongoDB/PostgreSQL)
- Payment gateway integration
- Email notifications
- Advanced search and filters
- User reviews and ratings
- Product recommendations
- Inventory management
- Order tracking
- Analytics dashboard

## Security Notes

**This is a demonstration website. For production use:**
- Implement proper user authentication
- Use HTTPS for all connections
- Secure payment processing
- Protect sensitive user data
- Implement proper access controls
- Add input validation and sanitization

## License

MIT License - feel free to use for personal and commercial projects.

## Support

For issues or questions, please contact: info@urbanroots.com

## Author

Urban Roots Development Team
