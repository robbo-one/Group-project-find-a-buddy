exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('table_name')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('table_name').insert([
				{ user_id: 99901, country: 'Ambitious Aardvark' },
				{ user_id: 99902, country: 'Bamboozled Baboon' },
				{ user_id: 99903, country: 'Curious Capybara' },
				{ user_id: 99904, country: 'Dilapidated Duck' },
				{ user_id: 99905, country: 'Exuberant Elephant' },
				{ user_id: 99906, country: 'Fascinated Flying Fox' },
				{ user_id: 99907, country: 'Generous Gila Monster' },
				{ user_id: 99908, country: 'Hilarious Heron' },
				{ user_id: 99909, country: 'Intransigent Impala' },
				{ user_id: 99910, country: 'Jocular Jerboa' },
			]);
		});
};
