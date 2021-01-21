
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav_character').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav_character').insert([
        { user_id: 99901, character: 'Mickey Mouse' },
				{ user_id: 99902, character: 'Mickey Mouse' },
				{ user_id: 99903, character: 'Mickey Mouse' },
				{ user_id: 99904, character: 'Toothless' },
				{ user_id: 99905, character: 'Toothless' },
				{ user_id: 99906, character: 'Toothless' },
				{ user_id: 99907, character: 'Cinderella' },
				{ user_id: 99908, character: 'Cinderella' },
				{ user_id: 99909, character: 'Cinderella' },
				{ user_id: 99910, character: 'Bart Simpson'}
      ]);
    });
};
