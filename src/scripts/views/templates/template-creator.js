import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h2 class="restaurant_title">${resto.name}</h2>
<img class="restaurant_thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
<div class="restaurant_info">
  <h3>Information</h3>
  <h4>Address</h4>
  <p>${resto.address}</p>
  <h4>City</h4>
  <p>${resto.city} minutes</p>
  <h4>Rating</h4>
  <p>${resto.rating}</p>
</div>
<div class="resto_overview">
  <h3>Description</h3>
  <p>${resto.description}</p>
</div>
<div class="restaurant_menu">
<h1 class="line">MENU</h1>
  <div class="restaurant_foods">
    <h2>FOODS</h2>
    <p>${resto.menus.foods.map((food) => `
      <p>${food.name}</p>
    `).join('')}</p>
  </div>
  <div class="restaurant_drinks">
    <h2>DRINKS</h2>
    <p>${resto.menus.drinks.map((drink) => `
      <p>${drink.name}</p>
    `).join('')}</p>
  </div>
</div>
<div class="restaurant_review">
<h1 class="line">Komentar</h1>
${resto.customerReviews.map((review) => `
<div class="restaurant_review_card">  
  <h3>${review.name}</h3>
  <p class="comment_date">${review.date}</p>
  <p class="comment_review">" ${review.review} "</p>
</div>
`).join('')}
</div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
      <img class="restaurant-item_header_thumbnail" alt="${resto.name || '-'}"
        src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item_header_rating">
        <p>⭐️<span class="restaurant-item_header_rating_number">${resto.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item_content">
      <h3 class="restaurant_title"><a href="/#/detail/${resto.id}">${resto.name || '-'}</a></h3>
      <p>${resto.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
