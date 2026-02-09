// Optional JavaScript for enhanced touch feedback
document.addEventListener('DOMContentLoaded', function() {
    const messageCards = document.querySelectorAll('.message-card');

    // Add touch feedback class
    messageCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('touching');
        });

        card.addEventListener('touchend', function() {
            this.classList.remove('touching');
        });

        // Optional: Click to show modal or enlarge image
        card.addEventListener('click', function() {
            // You can add functionality here, like:
            // - Open modal with larger image
            // - Play audio message
            // - Show detailed description
            console.log('Message clicked:', this.querySelector('.message-caption').textContent);
        });
    });
});
