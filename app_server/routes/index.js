var express = require('express');
var router = express.Router();
var ctrlMain = require('C:/Users/asus/Desktop/mekan32/app_server/controllers/main')
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
