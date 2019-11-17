const express = require("express");
const router = express.Router();

const fetch = require('node-fetch');

router.get('/api/users', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    res.json(users);
});

module.exports = router;
