import { sources } from './sources';
import { options } from './options';

const images = options.images;
let imagesCounter = options.imagesCounter;
const $loading = options.$loading = document.getElementById('loading');
const imagesQuantity = options.imagesQuantity = sources.length;

export function loadImages(callback) {
  for (let i = 0; i < imagesQuantity; i += 1) {
    let $image = document.createElement('img');
    $image.addEventListener('load', () => {
      imagesCounter += 1;
      images.push($image);
      // $image.classList.add('img');
      // document.body.appendChild($image);
      $loading.textContent = `LOADING... ${imagesCounter}`;
      if (imagesCounter >= imagesQuantity) {
        callback();
        console.log('after', images);
      }
    });
    $image.src = sources[i];
  }
}

console.log('before', images);

// export function loadSounds() {}