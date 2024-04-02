import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  const li = `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img      
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  ul.innerHTML += li;
});

let lightboxInstance;
const images = document.querySelectorAll(".gallery__image");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    const {
      target: {
        dataset: { source },
      },
    } = e;
    lightboxInstance = basicLightbox.create(`
        <div class="modal">
            <img src="${source}"/>
        </div>
    `);
    lightboxInstance.show();
  });
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightboxInstance) {
    lightboxInstance.close();
  }
});
