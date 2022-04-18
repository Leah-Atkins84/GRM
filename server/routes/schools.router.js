const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------POST to create new school-----------------------
router.post('/', (req, res) => {
  let queryText = `INSERT INTO "schools" ("name")
  VALUES ($1);`;

  let queryInserts = [req.body.name];

  if(req.isAuthenticated()) {
    pool.query(queryText, [queryInserts])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in schools post', error);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }
}); // end post route

module.exports = router;