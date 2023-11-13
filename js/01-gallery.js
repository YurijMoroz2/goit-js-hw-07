import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
console.log(galleryItems);
console.log(container);

function createMarkup(arr){
  const res= arr.map(({preview, original, description}) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  ).join("");
  
  return res;
};
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

// add click

container.addEventListener("click", handelClick);
function handelClick(event) {
  event.preventDefault()

  if (event.target === event.currentTarget) {
      return;
  };
  const modalImg = event.target.closest(".gallery__link").getAttribute("href");
  console.log(modalImg)
  
  const instance = basicLightbox.create(`
  <img class="gallery__image" src="${modalImg}" alt="${modalImg.description}">
  `);
  instance.show()

  document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
          return instance.close();
      }
      return;
  })
}