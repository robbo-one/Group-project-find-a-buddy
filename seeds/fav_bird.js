
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav_bird').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav_bird').insert([
        { user_id: 99901, bird: 'Kea' },
				{ user_id: 99902, bird: 'Kea' },
				{ user_id: 99903, bird: 'Kea' },
				{ user_id: 99904, bird: 'Piwakawaka' },
				{ user_id: 99905, bird: 'Piwakawaka' },
				{ user_id: 99906, bird: 'Piwakawaka' },
				{ user_id: 99907, bird: 'Kiwi' },
				{ user_id: 99908, bird: 'Kiwi' },
				{ user_id: 99909, bird: 'Kiwi' },
				{ user_id: 99910, bird: 'Ostrich' },
      ]);
    });
};
