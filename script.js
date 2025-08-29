document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality for tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const destinationCards = document.querySelectorAll('.destination-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Filter destinations based on the active tab
            const destinationName = button.textContent;

            destinationCards.forEach(card => {
                const cardTitle = card.querySelector('h3').textContent;
                if (cardTitle.includes(destinationName) || destinationName === 'Omaha Beach') {
                    card.style.display = 'block'; // Show the card
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });
        });
    });

    // Initial load: display the default tab
    // This is to ensure content is shown on page load
    const defaultTab = document.querySelector('.tab-btn.active');
    if (defaultTab) {
        defaultTab.click();
    }
});

    document.querySelector('a[href="#houseDetails"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
