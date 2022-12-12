import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <article class="headline">
      <div class="headline_content">
        <h1 class="headline_title">Restoran Khas Indonesia</h1>
        <p class="headline_description">Indonesian Food Legacy merupakan group yang telah berdiri sejak lama. Grup ini 
          sendiri telah menyediakan banyak rekomendasi restoran yang memiliki ciri khas Indonesia di dalamnya. 
          Restoran - restoran yang ada juga menyediakan banyak sekali makanan - makanan khas dari seluruh penjuru Indonesia.
        </p>
      </div>
    </article>
    <div class="content">
    <h2 class="content_heading">Restaurant List</h2>
    <div id="restaurants" class="restaurants">
    </div>
</div>

  </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restoContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
