
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav_birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav_birds').insert([
        { user_id: 99901, fav_birds: 'Kea' },
				{ user_id: 99902, fav_birds: 'Kea' },
				{ user_id: 99903, fav_birds: 'Kea' },
				{ user_id: 99904, fav_birds: 'Piwakawaka' },
				{ user_id: 99905, fav_birds: 'Piwakawaka' },
				{ user_id: 99906, fav_birds: 'Piwakawaka' },
				{ user_id: 99907, fav_birds: 'Kiwi' },
				{ user_id: 99908, fav_birds: 'Kiwi' },
				{ user_id: 99909, fav_birds: 'Kiwi' },
				{ user_id: 99910, fav_birds: 'Ostrich' },
      ]);
    });
};
