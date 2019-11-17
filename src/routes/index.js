const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({title: "Hello world"});
});

router.get('/test', (req, res) =>{
    const data = [
        {
            name: "Toyota",
            web: "fazt@test.com"
        },
        {
            name: "Toyota",
            web: "fazt@test.com"
        }
    ]
    res.json(data)
});

module.exports = router;