# 🎨 Personal Profile Card

A modern, responsive personal profile card website built with HTML, CSS, and vanilla JavaScript. Features a clean design with smooth animations and an intuitive user experience.

## 📋 Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Browser Compatibility](#browser-compatibility)
- [License](#license)

## ✨ Features

- **Responsive Design**: Works seamlessly across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Hamburger menu with smooth dropdown animations
- **Live Time Display**: Real-time clock showing current time
- **Contact Form**: Fully validated contact form with error handling
- **Social Media Integration**: Quick access to social profiles (Twitter, GitHub, Email)
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: Lightweight and fast-loading

## 📄 Pages

### 1. Home (index.html)
- Profile picture with hover effects
- Personal bio and introduction
- Real-time clock display
- Hobbies and dislikes sections
- Social media dropdown menu

### 2. About (about.html)
- Detailed biography
- Program goals and aspirations
- Areas of growth and learning
- Personal reflections
- Future notes and thoughts

### 3. Contact (contact.html)
- Validated contact form with fields:
  - Full Name (required)
  - Email (validated format)
  - Subject (required)
  - Message (minimum 10 characters)
- Real-time error messages
- Success confirmation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: 
  - Custom CSS variables for theming
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Media queries for responsiveness
- **JavaScript (ES6)**:
  - Form validation
  - Dynamic time updates
  - Menu toggle functionality
  - Click-outside detection
- **Font Awesome 6.5.0**: Icons for social media links
- **Google Fonts**: Inter and Montserrat font families

## 📦 Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Kimathii/profile-card.git
   cd profile-card
   ```

2. **Ensure you have the following files**:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `Profile Card.css`
   - `Profile Card.js`
   - `profile.JPG` (your profile picture)

3. **Open in browser**:
   - Simply open `index.html` in your preferred web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

## 📁 File Structure

```
profile-card/
│
├── index.html              # Home page with profile card
├── about.html              # About page with detailed info
├── contact.html            # Contact form page
├── Profile Card.css        # Main stylesheet
├── Profile Card.js         # JavaScript functionality
├── profile.JPG             # Profile picture
└── README.md              # This file
```

## 🚀 Usage

### Navigation
- Click the hamburger menu (☰) in the top-left to access pages
- Menu automatically closes when clicking outside
- Fully keyboard accessible

### Contact Form
- Fill in all required fields
- Email must be in valid format (e.g., user@example.com)
- Message must be at least 10 characters
- Errors display in real-time below each field
- Success message appears upon valid submission

### Social Links
- Hover over "Check Me Out 😉⬇" button
- Dropdown appears directly below with social links
- Click to open in new tab (Twitter, GitHub) or email client

## 🎨 Customization

### Colors
Edit the CSS variables in `Profile Card.css`:

```css
:root {
  --primary-bg: #0c204f;      /* Main background color */
  --card-bg: #f5f5f5;         /* Card background */
  --accent-color: #0078ff;    /* Accent/link color */
  --hover-color: #005fcc;     /* Hover state color */
  /* ... more variables */
}
```

### Personal Information
1. Replace content in HTML files with your own information
2. Update `profile.JPG` with your own image
3. Modify social media links in the dropdown section
4. Update the bio, hobbies, and other personal details

### Spacing & Layout
Adjust spacing variables:

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}
```

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

**Minimum Requirements**:
- CSS Grid and Flexbox support
- ES6 JavaScript support
- CSS Custom Properties (variables) support

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Small Tablets**: 576px - 767px
- **Tablets**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: ≥ 1200px

## ⚡ Performance Features

- Optimized animations with `transform` and `opacity`
- Efficient event listeners with proper cleanup
- Minimal DOM manipulation
- Reduced motion support for accessibility
- Lazy-loaded external resources (Font Awesome, Google Fonts)

## 🐛 Known Issues

None at the moment! If you find any bugs, please report them.

## 🔮 Future Enhancements

- [ ] Add portfolio/projects section
- [ ] Implement blog functionality
- [ ] Add skills visualization (progress bars/charts)
- [ ] Dark mode toggle (optional)
- [ ] Multi-language support
- [ ] Backend integration for contact form

## 👤 Author

**Echioda Mathias Jr**

- GitHub: [@Kimathii](https://github.com/Kimathii)
- Twitter: [@_Mathias_Jr_](https://x.com/_Mathias_Jr_)
- Email: mechioda@gmail.com

## 🙏 Acknowledgments

- Built as part of the HNG Internship Program
- Font Awesome for the icon library
- Google Fonts for typography

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Mathias Echioda**

*"We go eventually dey alright."*
