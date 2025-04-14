document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      const content = document.getElementById('content');

      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';

      setTimeout(() => {
        loader.style.visibility = 'hidden';
        content.classList.remove('hidden');
        content.classList.add('visible');
      }, 500);
    }, 800);

  });