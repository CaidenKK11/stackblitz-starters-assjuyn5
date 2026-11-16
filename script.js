const galleryRanges = {
  safety: [5, 6],
  motherboard: [4, 24],
  cpu: [25, 34],
  cables: [35, 54],
  storage: [55, 66],
  memory: [67, 72],
  expansion: [73, 84],
  peripherals: [85, 96],
  power: [97, 108]
};

function createReferenceGallery(container) {
  const range = galleryRanges[container.dataset.gallery];
  if (!range) return;

  for (let number = range[0]; number <= range[1]; number += 1) {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const caption = document.createElement('figcaption');
    const imageNumber = String(number).padStart(3, '0');

    image.src = `assets/graphic-${imageNumber}.png`;
    image.alt = `${container.getAttribute('aria-label')} image ${number}`;
    image.loading = 'lazy';
    caption.textContent = `Reference ${imageNumber}`;
    figure.append(image, caption);
    container.append(figure);
  }
}

document.querySelectorAll('[data-gallery]').forEach(createReferenceGallery);
