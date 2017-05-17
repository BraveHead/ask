
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get('/a', function (req, res, next) {

    req.session.count++;
    res.send('respond with a resource ' + req.session.count);
});

module.exports = router;
