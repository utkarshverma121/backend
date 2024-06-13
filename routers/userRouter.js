const express = require('express');

const router = express.Router();


router.post('/add', (req, res) => {

    console.log(req.body);

    res.send('Response From user add');
});

router.get('/getall', (req, res ) => {
    res.send('Response From user getall');
});

module.exports = router;