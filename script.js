const thumbnails = document.querySelectorAll('.thumbnails img');
const largeImage = document.getElementById('largeImage');

thumbnails.forEach((thumbnail) => {
    // Survol de la souris
    thumbnail.addEventListener('mouseover', () => {
        largeImage.style.backgroundImage = `url(${thumbnail.src})`;
        largeImage.setAttribute('aria-label', thumbnail.alt);
    });

    // Sortie de la souris
    thumbnail.addEventListener('mouseleave', () => {
        largeImage.style.backgroundImage = '';
        largeImage.setAttribute('aria-label', 'Image principale');
    });
});
thumbnails.forEach((thumbnail) => {
    // Focus clavier
    thumbnail.addEventListener('focus', () => {
        largeImage.style.backgroundImage = `url(${thumbnail.src})`;
        largeImage.setAttribute('aria-label', thumbnail.alt);
    });

    // Blur (perte de focus)
    thumbnail.addEventListener('blur', () => {
        largeImage.style.backgroundImage = '';
        largeImage.setAttribute('aria-label', 'Image principale');
    });
});
window.addEventListener('load', () => {
    console.log('La galerie a été chargée avec succès.');
});
thumbnails.forEach((thumbnail, index) => {
    thumbnail.setAttribute('tabindex', index + 1);
});
