const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req,res) => {
    console.log('Query String', req.query);
})

module.exports = router;