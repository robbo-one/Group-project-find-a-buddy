
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('superpower').del()
    .then(function () {
      // Inserts seed entries
      return knex('superpower').insert([
        { user_id: 99901, superpower: 'Fly' },
				{ user_id: 99902, superpower: 'Fly' },
				{ user_id: 99903, superpower: 'Fly' },
				{ user_id: 99904, superpower: 'breathe underwater' },
				{ user_id: 99905, superpower: 'breathe underwater' },
				{ user_id: 99906, superpower: 'breathe underwater' },
				{ user_id: 99907, superpower: 'invisibility' },
				{ user_id: 99908, superpower: 'invisibility' },
				{ user_id: 99909, superpower: 'invisibility' },
				{ user_id: 99910, superpower: 'Morph into any animal' },
      ]);
    });
};
