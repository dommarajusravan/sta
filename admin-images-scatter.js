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
        if (!gallery) return;
    
        const items = Array.from(gallery.querySelectorAll('.admin-item'));
        const imageSize = 180; // Match CSS
        const margin = 30;
        const positions = [];
    
        // Ensure gallery has enough height
        const containerWidth = gallery.clientWidth;
        const containerHeight = Math.max(gallery.clientHeight, window.innerHeight);
    
        // Adjust height dynamically based on number of images
        gallery.style.minHeight = `${containerHeight}px`;
    
        const minX = margin;
        const minY = margin;
        const maxX = containerWidth - imageSize - margin;
        const maxY = containerHeight - imageSize - margin;
    
        function checkOverlap(x, y) {
            return positions.some(pos => {
                const dx = x - pos.x;
                const dy = y - pos.y;
                return Math.sqrt(dx * dx + dy * dy) < imageSize + margin;
            });
        }
    
        items.forEach(item => {
            let x, y, isValidPosition = false;
            let attempts = 0;
    
            while (!isValidPosition && attempts < 1000) {
                x = Math.random() * (maxX - minX) + minX;
                y = Math.random() * (maxY - minY) + minY;
    
                if (!checkOverlap(x, y)) {
                    isValidPosition = true;
                    positions.push({ x, y });
                }
                attempts++;
            }
    
            if (isValidPosition) {
                item.style.left = `${x}px`;
                item.style.top = `${y}px`;
                item.style.visibility = "visible"; // Ensure visibility after positioning
            }
        });
    }
    
    // Run on page load & window resize
    window.addEventListener("load", scatterImages);
    window.addEventListener("resize", scatterImages);

