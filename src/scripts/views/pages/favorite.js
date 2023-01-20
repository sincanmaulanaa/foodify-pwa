/* eslint-disable no-tabs */
/* eslint-disable operator-linebreak */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
	  <section class="main_title">
		 <p>Your</p>
		 <h2>Favorite Restaurants</h2>
	   </section>
       <section class="content">
      	 <div class="card" id="card"></div>
       </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#card');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
