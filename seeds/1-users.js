exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 99901, name: 'Ambitious Aardvark'},
    { id: 99902, name: 'Bamboozled Baboon'},
    { id: 99903, name: 'Curious Capybara'},
    { id: 99904, name: 'Dilapidated Duck'},
    { id: 99905, name: 'Exuberant Elephant'},
    { id: 99906, name: 'Fascinated Flying Fox' },
    { id: 99907, name: 'Generous Gila Monster' },
    { id: 99908, name: 'Hilarious Heron'},
    { id: 99909, name: 'Intransigent Impala'},
    { id: 99910, name: 'Jocular Jerboa'},
  ])
}
