
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favCharacter').del()
    .then(function () {
      // Inserts seed entries
      return knex('favCharacter').insert([
        { user_id: 99901, country: 'Mickey Mouse' },
				{ user_id: 99902, country: 'Mickey Mouse' },
				{ user_id: 99903, country: 'Mickey Mouse' },
				{ user_id: 99904, country: 'Toothless' },
				{ user_id: 99905, country: 'Toothless' },
				{ user_id: 99906, country: 'Toothless' },
				{ user_id: 99907, country: 'Cinderella' },
				{ user_id: 99908, country: 'Cinderella' },
				{ user_id: 99909, country: 'Cinderella' },
				{ user_id: 99910, country: 'Bart Simpson'}
      ]);
    });
};
