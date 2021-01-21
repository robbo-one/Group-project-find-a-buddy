exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('fav_countries')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('fav_countries').insert([
				{ user_id: 99901, country: 'New Zealand' },
				{ user_id: 99902, country: 'New Zealand' },
				{ user_id: 99903, country: 'New Zealand' },
				{ user_id: 99904, country: 'Japan' },
				{ user_id: 99905, country: 'Japan' },
				{ user_id: 99906, country: 'Japan' },
				{ user_id: 99907, country: 'Australia' },
				{ user_id: 99908, country: 'Australia' },
				{ user_id: 99909, country: 'Australia' },
				{ user_id: 99910, country: 'U.S.A' },
			]);
		});
};
