import './index.css';
const {sources} = require('./sources');
const {maps} = require('./maps');

// // console.log(sources);
// const img = document.createElement('img');
// img.src = sources[55];
// img.addEventListener('load', () => {
//   document.body.appendChild(img);
// });

for (let i = 0; i < sources.length; i += 1) {
  let img = document.createElement('img');
  img.src = sources[i];
  img.addEventListener('load', () => {
    document.body.appendChild(img);
    img.classList.add('img');
  });
}

console.log(maps);