const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/questions/random', (req, res) => {
    const query = 'SELECT * FROM preguntasChill ORDER BY RAND() LIMIT 1';
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching random question:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(result[0]);
    });
});

module.exports = router;
