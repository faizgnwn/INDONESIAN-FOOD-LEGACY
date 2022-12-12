/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('.restaurant-item_not_found', 30);

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item_not_found', 30);

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title a', 30);

  I.seeElement('.restaurant_title a');

  const firstRestaurant = locate('.restaurant_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 30);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');

  I.waitForElement('.restaurant-item', 30);

  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.waitForElement('.restaurant-item_not_found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title a', 30);
  I.seeElement('.restaurant_title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant_title a').at(i));

    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    titles.push(await I.grabTextFrom('.restaurant_title'));
    I.amOnPage('/');
    I.wait(3);
  }

  I.amOnPage('/#/favorites');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant_title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
