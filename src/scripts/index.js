/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/* other existing code */
// import data from '../DATA.json';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// let html = '';
// data.restaurants.forEach((resto) => {
//   html += `
//         <article class="restaurant-item">
//         <div class="restaurant-item_city">${resto.city}</div>
//           <div>
//             <img class="restaurant-item_thumbnail" src="${resto.pictureId}" alt="Gambar suasana restoran yang berada di ${resto.city}"/>
//             </div>
//           <div class="restaurant-item_content">
//             <p class="restaurant-item_rating">
//               Rating <span class="restaurant-item_rate_number">${resto.rating}</span>
//             </p>
//             <h1 class="restaurant-item_title"><a href="#" class="restaurant-item_title">${resto.name}</a></h1>
//             <p class="restaurant-item_description">${resto.description}</p>
//           </div>
//         </article>
//     `;
//   document.querySelector('.restaurants').innerHTML = html;
// });

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });
