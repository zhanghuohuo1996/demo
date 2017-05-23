var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.download);
	 if(req.query.download){
		 var data={'url':'./javascripts/review.csv'};
		 res.send(data);
		 res.end();
	}
	else{
		res.render('index', { title: 'Express' });
	}
});
module.exports = router;
