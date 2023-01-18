/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable implicit-arrow-linebreak */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) =>
  `
	<h2 class="restaurant_name">${restaurant.name}</h2>
	<div class="restaurant_info">
		<p class="city">${restaurant.city}</p>
		<p class="rating">⭐ ${restaurant.rating}</p>
	</div>
	<div class="restaurant_description">
		<h3>About Us</h3>
		<p>${restaurant.description}</p>
	</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="card-item">
	<img class="card-item_thumbnail" src="${
    CONFIG.BASE_IMAGE_URL('medium') + restaurant.pictureId
  }" alt="${restaurant.name}">
	<span class="card-item_city">${restaurant.city}</span>
	<span class="card-item_rating">⭐ ${restaurant.rating}</span>
	<h3 class="card-item_title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}	</a></h3>
	<p class="card-item_description">${restaurant.description}</p>
</article>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
