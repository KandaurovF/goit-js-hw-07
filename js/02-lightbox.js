import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join('');
}
