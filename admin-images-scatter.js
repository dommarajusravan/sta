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
        let imageSize = window.innerWidth < 600 ? 120 : 180;
        let margin = window.innerWidth < 600 ? 15 : 30;
        const positions = [];
    
        // **Adjust gallery height dynamically based on image count**
        const estimatedHeight = Math.max(window.innerHeight, (items.length / 2) * (imageSize + margin));
        gallery.style.minHeight = `${estimatedHeight}px`;
    
        const minX = margin;
        const minY = margin;
        const maxX = gallery.clientWidth - imageSize - margin;
        const maxY = estimatedHeight - imageSize - margin;
    
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
    
            while (!isValidPosition && attempts < 500) {
                x = Math.random() * (maxX - minX) + minX;
                y = Math.random() * (maxY - minY) + minY;
    
                if (!checkOverlap(x, y)) {
                    isValidPosition = true;
                    positions.push({ x, y });
                }
                attempts++;
            }
    
            if (isValidPosition) {
                item.style.width = `${imageSize}px`;
                item.style.height = `${imageSize}px`;
                item.style.left = `${x}px`;
                item.style.top = `${y}px`;
                item.style.visibility = "visible";
            }
        });
    
        // Adjust footer margin to prevent images from being hidden
        document.querySelector(".footer").style.marginTop = "150px";
    }
    
    // Run on load & resize
    window.addEventListener("load", scatterImages);
    window.addEventListener("resize", scatterImages);
    window.addEventListener("orientationchange", scatterImages);


