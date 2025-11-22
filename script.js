const accordions = document.querySelectorAll('.accordion-question');

accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        // Toggle active class
        this.classList.toggle('active');

        // Toggle panel
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove('active');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add('active');
        }

        // Optional: Close other panels
        accordions.forEach(otherAcc => {
            if (otherAcc !== acc) {
                otherAcc.classList.remove('active');
                const otherPanel = otherAcc.nextElementSibling;
                otherPanel.style.maxHeight = null;
                otherPanel.classList.remove('active');
            }
        });
    });
});
