import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';

/* eslint-disable no-tabs */
const Detail = {
  async render() {
    return `
	<section class="content">
		<div class="restaurant" id="restaurant"></div>
    <div id="likeButtonContainer"></div>
	</section>
		`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const heroImageContainer = document.querySelector('#hero');
    const restaurantImage = `<img id="restaurant-image" class="restaurant_image" src="${
      CONFIG.BASE_IMAGE_URL('medium') + restaurant.pictureId
    }" alt="${restaurant.name}" />`;

    heroImageContainer.innerHTML = restaurantImage;
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
