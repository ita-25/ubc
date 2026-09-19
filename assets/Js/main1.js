// Universal Countdown Logic
const countdown = () => {
    const countDate = new Date("March 7, 2026 09:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const countdownElement = document.getElementById("countdown");
    
    if (!countdownElement) return; // Exit if element doesn't exist

    if (gap > 0) {
        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
        
        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        countdownElement.innerHTML = `
            <div class="time-box"><h2>${d}</h2><small>Days</small></div>
            <div class="time-box"><h2>${h}</h2><small>Hours</small></div>
            <div class="time-box"><h2>${m}</h2><small>Minutes</small></div>
            <div class="time-box"><h2>${s}</h2><small>Seconds</small></div>
        `;
    } else {
        countdownElement.innerHTML = "<h2>Countdown Expired!</h2>";
        clearInterval(countdownInterval); // Stop the interval when countdown ends
    }
};

// Start countdown only if element exists
const countdownElement = document.getElementById("countdown");
let countdownInterval;
if (countdownElement) {
    countdown(); // Run immediately once
    countdownInterval = setInterval(countdown, 1000);
}


// Smooth Page Navigation - Only run when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "#!") return; // Skip empty or invalid anchors
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' // Better alignment
                });
            }
        });
    });

    // Back to Top Logic
    const mybutton = document.getElementById("btn-back-to-top");
    
    if (mybutton) {
        // Initial state
        mybutton.style.display = 'none';
        
        // Scroll event handler
        const handleScroll = function() {
            if (window.scrollY > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };
        
        // Back to top click handler
        mybutton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            // Optional: focus management for accessibility
            this.blur();
        });
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
    }
});
