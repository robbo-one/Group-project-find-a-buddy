const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  addFavBird: addFavBird,
  addFavCharacter: addFavCharacter,
  addFavCountry: addFavCountry,
  addFavSuperPower: addFavSuperPower,
  getAllFromUser: getAllFromUser,
  getAllResults: getAllResults,
  noDupes: noDupes
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser(name, db = connection) {
  return db("users")
  .insert({name: name})
}

function addFavBird(bird, userid, db = connection) {
  return db("fav_bird")
  .insert({bird: bird, user_id: userid})
}

function addFavCharacter(character,userid, db = connection) {
  return db("fav_character")
  .insert({character: character, user_id: userid})
}

function addFavCountry(country,userid, db = connection) {
  return db("fav_countries")
  .insert({country: country, user_id: userid})
}

function addFavSuperPower(superpower,userid, db = connection) {
  return db("superpower")
  .insert({superpower: superpower, user_id: userid})
}

function getAllFromUser(id, db = connection) {
  return db("users")
  .join('fav_bird', "users.id", "fav_bird.user_id" )
  .join("fav_character","users.id", "fav_character.user_id")
  .join("fav_countries","users.id", "fav_countries.user_id")
  .join("superpower","users.id", "superpower.user_id")
  .where("userid", id)
  .select("*", "users.id AS userid")
}

function getAllResults(db = connection) {
  return db("users")
  .join('fav_bird', "users.id", "fav_bird.user_id" )
  .join("fav_character","users.id", "fav_character.user_id")
  .join("fav_countries","users.id", "fav_countries.user_id")
  .join("superpower","users.id", "superpower.user_id")
  .select("*", "users.id AS userid")
}

function noDupes(result) {
  //make an array
    //object
      //birds
    //objects
      //characters

  for(let i = 0; i<result.length; i++) {
    let bird = result[i].bird
    console.log(bird)
    let country = result[i].country
    console.log(bird)
    let character = result[i].character
    console.log(bird)
    let superpower = result[i].superpower
    console.log(bird)
  }
  
  return result
}

