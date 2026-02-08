const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const startCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animate = () => {
                const target = +entry.target.getAttribute('data-target');
                const count = +entry.target.innerText;
                const increment = target / speed;

                if (count < target) {
                    entry.target.innerText = Math.ceil(count + increment);
                    setTimeout(animate, 1);
                } else {
                    entry.target.innerText = target + "+"; // Adds a plus at the end
                }
            };
            animate();
            observer.unobserve(entry.target); // Stop observing after animation is done
        }
    });
};

const observer = new IntersectionObserver(startCounters, {
    threshold: 0.5 // Start when 50% of the section is visible
});

counters.forEach(counter => observer.observe(counter));
