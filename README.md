# 🌿✨ Pokémon-Themed Software Engineering Portfolio

A fun, interactive, and modern software engineering portfolio with a Pokémon theme! Features Leafeon for light mode and Umbreon for dark mode, complete with smooth animations, interactive elements, and a responsive design.

## 🎮 Features

### ✨ Visual Design
- **Dual Theme System**: Leafeon-inspired light mode and Umbreon-inspired dark mode
- **Pokémon Sprites**: Official artwork from the PokéAPI
- **Floating Pokéballs**: Animated background elements with parallax effects
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Responsive Design**: Works perfectly on all devices

### 🚀 Interactive Elements
- **Theme Toggle**: Switch between light/dark modes with smooth transitions
- **Animated Skill Bars**: Skills animate when scrolled into view
- **Typing Effect**: Hero title types out dynamically
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Hover Effects**: Interactive project cards and buttons
- **Ripple Effects**: Material design-inspired button interactions

### 📱 User Experience
- **Mobile-First**: Responsive navigation with hamburger menu
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators
- **Performance**: Optimized animations and debounced scroll events
- **Notifications**: Toast notifications for form submissions
- **Scroll Progress**: Visual progress indicator at the top

### 🎯 Easter Eggs
- **Konami Code**: Enter ↑↑↓↓←→←→BA for a surprise!
- **Particle Effects**: Floating particles in the hero section
- **Rainbow Mode**: Special effect when Easter egg is activated

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern CSS with custom properties, Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Poppins font family
- **PokéAPI**: Official Pokémon sprites and artwork

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The portfolio is ready to use

### Local Development
For development purposes, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

```html
<!-- Hero Section -->
<span class="name">Your Name</span>
<span class="title">Software Engineer</span>

<!-- About Section -->
<p>Your personal description here...</p>

<!-- Stats Section -->
<span class="stat-number">3+</span>
<span class="stat-label">Years Experience</span>

<!-- Contact Section -->
<p>your.email@example.com</p>
<p>linkedin.com/in/yourprofile</p>
<p>github.com/yourusername</p>
<p>Your City, Country</p>
```

### Profile Photo
Replace the placeholder image in the About section:

```html
<img src="path/to/your/photo.jpg" alt="Your Photo" class="profile-img">
```

### Skills and Levels
Modify skill levels by changing the `data-level` attribute:

```html
<div class="skill-item" data-level="90">
    <span class="skill-name">Your Skill</span>
    <!-- ... -->
</div>
```

### Projects
Update the project cards with your own projects:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/project/image.jpg" alt="Project Name">
        <!-- ... -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

### Colors and Themes
Customize the color scheme in `styles.css`:

```css
:root {
    /* Light Mode Colors (Leafeon Theme) */
    --primary-color: #4CAF50;      /* Main brand color */
    --secondary-color: #8BC34A;    /* Secondary color */
    --accent-color: #FFEB3B;       /* Accent color */
    
    /* Dark Mode Colors (Umbreon Theme) */
    --dark-primary-color: #673AB7;    /* Dark mode primary */
    --dark-secondary-color: #9C27B0;  /* Dark mode secondary */
    --dark-accent-color: #FF9800;     /* Dark mode accent */
}
```

### Pokémon Sprites
Change the Pokémon characters by updating the sprite URLs:

```html
<!-- Leafeon (Light Mode) -->
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png" alt="Leafeon">

<!-- Umbreon (Dark Mode) -->
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" alt="Umbreon">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Performance Features

- **Lazy Loading**: Animations trigger on scroll
- **Debounced Events**: Optimized scroll handling
- **CSS Transitions**: Hardware-accelerated animations
- **Minimal Dependencies**: Only essential external libraries

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new `<section>` in `index.html`
2. Add corresponding styles in `styles.css`
3. Include the section in the navigation menu

### Custom Animations
Add new keyframes in `styles.css`:

```css
@keyframes yourAnimation {
    0% { /* initial state */ }
    100% { /* final state */ }
}
```

### JavaScript Extensions
Add new functionality in `script.js`:

```javascript
// Your custom function
function customFeature() {
    // Implementation
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', customFeature);
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your customized versions

## 🙏 Acknowledgments

- **Pokémon Company**: For the amazing Pokémon franchise
- **PokéAPI**: For providing official Pokémon sprites
- **Font Awesome**: For the beautiful icons
- **Google Fonts**: For the Poppins font family

## 📞 Support

If you have any questions or need help customizing your portfolio:

1. Check the customization guide above
2. Review the code comments
3. Open an issue on GitHub
4. Contact the developer

---

**Gotta catch 'em all! 🌿✨**

*Built with ❤️ and lots of Pokémon spirit*