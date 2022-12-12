/* eslint-disable no-undef */
const asset = require('assert');

Feature('Unliking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorites');
});
Scenario('showing empty liked menu restaurants', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.content_heading');
  I.amOnPage('/');

  I.waitForElement('.restaurant_title a', 30);
  I.seeElement('.restaurant_title a');

  const firstRestaurant = locate('.restaurant_title a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');

  const unlikedRestaurantsTitles = await I.grabTextFrom('.restaurant_title a');
  asset.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);

  I.seeElement('.restaurant_title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('.restaurant-item');
});
