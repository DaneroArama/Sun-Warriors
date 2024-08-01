document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('containter');
    const content = document.getElementById('content');

    // Simulating a loading process by using setTimeout
    setTimeout(() => {
        loader.classList.add('hidden');
        content.classList.remove('hidden');
    }, 4000); // Adjust the time as needed
});

document.addEventListener("DOMContentLoaded", function() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bulletPoints = entry.target.querySelectorAll('.bullet-point');
            bulletPoints.forEach((point, index) => {
              point.classList.add('animate');
              point.style.animationDelay = `${index * 0.2}s`; // Staggered effect
            });
          }
        });
      }, options);

      const target = document.querySelector('.hero');
      observer.observe(target);

      const observerLeft = new IntersectionObserver((entries, observerLeft) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bulletPoints = entry.target.querySelectorAll('.bullet-point1');
            bulletPoints.forEach((point, index) => {
              point.classList.add('animate-left');
              point.style.animationDelay = `${index * 0.2}s`; // Staggered effect
            });
          }
        });
      }, options);

      const targetLeft = document.querySelector('.hero1');
      observerLeft.observe(targetLeft);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const features = document.querySelectorAll('.feature');

        function handleScroll() {
            const triggerBottom = window.innerHeight / 5 * 4;

            features.forEach(feature => {
                const featureTop = feature.getBoundingClientRect().top;

                if (featureTop < triggerBottom) {
                    feature.classList.add('show');
                } else {
                    feature.classList.remove('show');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    });

document.addEventListener("DOMContentLoaded", function() {
  const fadeInSection = document.querySelector('.fade-in-section');

  function checkVisibility() {
    const rect = fadeInSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      fadeInSection.classList.add('visible');
    }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  checkVisibility(); // Initial check in case the section is already in view
});

