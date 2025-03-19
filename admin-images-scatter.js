    ScrollReveal().reveal('.service', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.form', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    // Function to randomly scatter the images without overlap
    function scatterImages() {
        const gallery = document.getElementById('adminGallery');
        const items = gallery.querySelectorAll('.admin-item');
        const imageSize = 150;
        const margin = 20;
        const positions = [];
    
        const maxHeight = gallery.offsetHeight - imageSize - margin; // Prevents overflow beyond the gallery
    
        function checkOverlap(x, y) {
            return positions.some(pos => {
                const dx = x - pos.x;
                const dy = y - pos.y;
                return Math.sqrt(dx * dx + dy * dy) < imageSize + margin;
            });
        }
    
        items.forEach(item => {
            let x, y, isValidPosition = false;
            while (!isValidPosition) {
                x = Math.random() * (window.innerWidth - imageSize);
                y = Math.random() * Math.min(window.innerHeight - imageSize, maxHeight); // Ensure images stay within bounds
                if (!checkOverlap(x, y)) {
                    isValidPosition = true;
                    positions.push({ x, y });
                }
            }
    
            item.style.position = 'absolute';
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            item.style.visibility = 'visible';
        });
    }
    
    window.onload = scatterImages;
