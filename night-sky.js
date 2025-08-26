// Enhanced Night Sky Generator for PlanetGo
// Dynamically creates stars, northern lights, and celestial effects

function generateNightSky() {
    const nightSky = document.getElementById('nightSkyScene');
    const northernLights = document.getElementById('northernLights');
    
    if (!nightSky || !northernLights) return;
    
    // Utility function for random numbers
    const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Configuration - More stars and lights for enhanced effect
    const STAR_COUNT = 120; // Even more stars
    const LIGHT_COUNT = 50; // More northern lights
    
    // Generate random hues for northern lights
    const HUES = new Array(3).fill().map(() => randomInRange(70, 300));
    const ALPHAS = new Array(3).fill().map(() => Math.random() * 0.8 + 0.3);
    
    // Create stars
    for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // More bright stars for better visibility
        if (Math.random() > 0.6) {
            star.classList.add('bright');
        }
        
        // More moving stars for dynamic effect
        if (Math.random() > 0.7) {
            star.classList.add('moving');
            star.style.setProperty('--move-duration', `${randomInRange(15, 35)}s`);
            star.style.setProperty('--move-delay', `${randomInRange(0, 20)}s`);
        }
        
        // Set star properties
        const size = Math.random() * 4 + 1; // Larger stars
        star.style.setProperty('--size', size);
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.setProperty('--duration', `${randomInRange(2, 8)}s`);
        star.style.setProperty('--delay', `${randomInRange(0, 10)}s`);
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        nightSky.appendChild(star);
    }
    
    // Create northern lights
    for (let i = 0; i < LIGHT_COUNT; i++) {
        const light = document.createElement('div');
        light.className = 'light-beam';
        
        // Rotate through different color combinations
        const hueOffset = (i * 120) % 360;
        const baseHue1 = (HUES[0] + hueOffset) % 360;
        const baseHue2 = (HUES[1] + hueOffset + 60) % 360;
        const baseHue3 = (HUES[2] + hueOffset + 120) % 360;
        
        // Set color variables with enhanced brightness
        light.style.setProperty('--color-one', `hsla(${baseHue1}, 90%, 60%, ${ALPHAS[0]})`);
        light.style.setProperty('--color-two', `hsla(${baseHue2}, 85%, 55%, ${ALPHAS[1]})`);
        light.style.setProperty('--color-three', `hsla(${baseHue3}, 95%, 65%, ${ALPHAS[2]})`);
        
        // Set animation properties
        light.style.setProperty('--duration', `${randomInRange(8, 25)}s`);
        light.style.setProperty('--delay', `${randomInRange(0, 15)}s`);
        light.style.setProperty('--left', `${randomInRange(-3, 10)}vmax`);
        light.style.setProperty('--up', `${randomInRange(0, 20)}vmax`);
        
        northernLights.appendChild(light);
    }
    
    console.log('🌌 Night sky generated with', STAR_COUNT, 'stars and', LIGHT_COUNT, 'light beams');
}

// Initialize night sky on page load
window.addEventListener('load', generateNightSky);

// Regenerate with new colors every 5 minutes for variety
setInterval(() => {
    const nightSky = document.getElementById('nightSkyScene');
    const northernLights = document.getElementById('northernLights');
    
    if (nightSky && northernLights) {
        // Clear existing stars and lights
        nightSky.querySelectorAll('.star').forEach(star => star.remove());
        northernLights.innerHTML = '';
        
        // Generate new ones
        generateNightSky();
    }
}, 300000); // 5 minutes
