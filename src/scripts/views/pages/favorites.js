/* eslint-disable no-new */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-resto-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restaurants/favorites-resto-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorites = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
  },
};

export default Favorites;
