/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable implicit-arrow-linebreak */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) =>
  `
	<div class="restaurant_detail_container">
		<h2 class="restaurant_name">${restaurant.name}</h2>
		<div class="restaurant_info">
			<p class="city">${restaurant.city}</p>
			<p class="rating">⭐ ${restaurant.rating}</p>
		</div>
		<div class="restaurant_detail">
			<p>Address</p>
			<p class="address">${restaurant.address}, ${restaurant.city}</p>
			<p>Category</p>
			<ul class="category">${restaurant.categories
        .map((category) => `<li class="category_item">${category.name}</li>`)
        .join('|')}</ul>
		</div>
		<div class="restaurant_menus">
			<h3>Menus</h3>
			<div class="menus_container">
				<div class="foods">
					<h4>Foods</h4>
					<ul class="foods">
						${restaurant.menus.foods
              .map((food) => `<li class="food_item">${food.name}</li>`)
              .join('')}
					</ul>
				</div>
				<div class="drinks">
					<h4>Drinks</h4>
						<ul class="drinks">
						${restaurant.menus.drinks
              .map((drink) => `<li class="drink_item">${drink.name}</li>`)
              .join('')}
					</ul>		
				</div>
			</div>
		</div>
	</div>
	<div class="customer_reviews">
		<h3 class="customer_reviews_title">
			What People Say
		</h3>
		<div class="customer_reviews_list">
			${restaurant.customerReviews
        .map(
          (review) => `
					<div class="customer_review_item">
						<span class="customer_name">${review.name}</span>
						<p class="customer_review">${review.review}</p>
						<span class="customer_date">${review.date}</span>
					</div>
					`
        )
        .join('')}
		</div>
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
