import './index.css';
const {sources} = require('./sources');

console.log(sources);
const img = document.createElement('img');
img.src = sources[55];
img.addEventListener('load', () => {
  document.body.appendChild(img);
});