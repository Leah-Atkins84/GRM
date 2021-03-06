const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, async (req, res) => {
  // Send back user object from the session (previously queried from the database)
  console.log("req.user is", req.user);

  res.send(req.user);
});

router.get("/permission", async (req, res) => {
  
  
  // const permissionLevel =
  //   await pool.query(`SELECT admin."permissionLevel" FROM admin
  // JOIN "user" on "user".id = admin."userId"
  // WHERE "user".id = ${req.user.id} ;`);

  // let permission = 0;
  

  // if (permissionLevel.rows[0] === undefined){
  //   permission = 0;
  // } else {
  //   permission = permissionLevel.rows[0].permissionLevel;
  // }
  console.log('permission is', req.user.access_level);
  
  res.send({
    permission: req.user.access_level
  });
});


// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  console.log("username is", username);
  console.log("password is", password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
