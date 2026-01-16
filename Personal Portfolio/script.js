const toggleBtn = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');
const rootElement = document.documentElement;

// --- 1. THEME LOGIC ---

// Check for saved theme in localStorage on page load
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    rootElement.setAttribute('data-theme', currentTheme);
    // Set button text based on what the NEXT action will be
    toggleBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
    const isLight = rootElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';

    // Apply theme to HTML element
    rootElement.setAttribute('data-theme', newTheme);

    // Save preference to browser storage
    localStorage.setItem('theme', newTheme);

    // Update button text
    toggleBtn.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
});

// --- 2. SCROLL VISIBILITY ---

// Using a standard scroll listener to toggle the "Back to Top" button
window.addEventListener('scroll', () => {
    // Check scroll depth (300px is usually a good threshold)
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// --- 3. BACK TO TOP ACTION ---

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});