// script.js
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Make "No" button move away on hover
noBtn.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    
    // Randomize position within the container bounds
    const offsetX = Math.random() * (rect.width - noBtn.offsetWidth);
    const offsetY = Math.random() * (rect.height - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${offsetX}px`;
    noBtn.style.top = `${offsetY}px`;
});

// When "Yes" is clicked, show a celebration message
yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>YAY! 💖 I will take care  of the bill myself...💑</h1>
            <p>Let's make this moment unforgettable! 🥰</p>
        </div>`;
});
