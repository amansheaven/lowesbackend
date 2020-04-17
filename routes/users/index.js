var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.status(200).send ('UserDB interations here...');
});

module.exports = router;
