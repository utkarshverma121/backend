const express = require('express');

const router = express.Router();


router.get('/add', (req, res) => {
    res.send('Response From user add');
});

router.get('/getall', (req, res) => {
    res.send('Response From user getall');
});

module.exports = router;