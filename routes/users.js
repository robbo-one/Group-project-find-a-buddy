const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {

  db.getUsers()
    .then(button => {
      res.render('index', {button: button})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/imFeelingIndecisive', (req, res) => {
	res.render('imFeelingIndecisive', {});
});

router.post('/imFeelingIndecisive', (req, res) => {
	let user = {
		name: req.body.name,
		fav_bird: req.body.fav_bird,
		fav_character: req.body.fav_character,
		fav_countries: req.body.fav_countries,
		superpower: req.body.superpower,
	};

	db.addUser(user.name).then((result1) => {
    db.addFavBird(user.fav_bird, result1[0])
    .then(() => {
      db.addFavCharacter(user.fav_character, result1[0])
      .then(() => {
        db.addFavCountry(user.fav_countries, result1[0])
        .then(() => {
          db.addFavSuperPower(user.superpower, result1[0])
          .then(() => {});
          console.log(result1[0])
          res.redirect('/profilePage/' + result1[0]);
				});
			});
		});
	});
});

router.get('/profilePage/:id', (req, res) => {
	let id = req.params.id;

  db.getAllFromUser(id)
  .then((user) => {
    console.log(user)
		res.render('profilePage', {user: user});
	});
});

router.get("/seetheresults", (req, res) => {
  db.getAllResults()
  .then((results) => {
    console.log(results)
    res.render("see_results", {results: results});
  })
});

module.exports = router;
