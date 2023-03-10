/* eslint-disable quotes */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

/* eslint-disable no-tabs */
const Home = {
  async render() {
    return `
	<section class="main_title">
		<p>Most Popular</p>
		<h2>Explore Restaurants</h2>
	</section>
    <section class="content">
      	<div class="card" id="card"></div>
    </section>
		`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantContainer = document.querySelector('#card');
    const heroImageContainer = document.querySelector('#hero');
    const originalHeroImage = `<img id="hero-image" src="./heros/hero-image.jpg" alt="">`;

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    heroImageContainer.innerHTML = originalHeroImage;
  },
};

export default Home;
