import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
galleryEl.addEventListener('click', onGalleryImgClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
         <a class="gallery__link" href="${preview}">
            <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
            />
         </a>
    </li>`;
    })
    .join('');
}

function onGalleryImgClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  } else {
    const instance = basicLightbox.create(`
                <img src="${event.target.dataset.source}" width="800" height="600">
            `);

    instance.show();

    const modalEl = document.querySelector('.basicLightbox');

    modalEl.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);

    function removerEventListener() {
      document.removeEventListener('keydown', closeModal);
    }

    function closeModal(event) {
      if (event.key === 'Escape' || event.button === 0) {
        instance.close();

        removerEventListener();
      }
    }
  }
}
