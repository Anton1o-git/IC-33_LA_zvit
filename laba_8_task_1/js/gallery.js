const images = [
    {
      preview: './img/photo1.jfif',
      original: './img/photo1.jfif',
      description: 'Фото 1',
    },
    {
      preview: './img/photo2.jfif',
      original: './img/photo2.jfif',
      description: 'Фото 2',
    },
    {
      preview: './img/photo3.jfif',
      original: './img/photo3.jfif',
      description: 'Фото 3',
    },

    {
      preview: './img/photo4.jfif',
      original: './img/photo4.jfif',
      description: 'Фото 4',
    },
    {
      preview: './img/photo5.jfif',
      original: './img/photo5.jfif',
      description: 'Фото 5',
    },
    {
      preview: './img/photo6.jfif',
      original: './img/photo6.jfif',
      description: 'Фото 6',
    },
];

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => 
    `<li class="gallery_item">
      <img
        class="gallery_image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </li>`
    )
.join('');
  
galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

    const largeImageURL = event.target.dataset.source;
    const imageDescription = event.target.alt;

    const instance = basicLightbox.create(`
      <div class="modal_content">
        <img src="${largeImageURL}" alt="${imageDescription}" />
        <p class="modal_description">${imageDescription}</p>
      </div>
    `);
    instance.show();
}
