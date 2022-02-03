const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('source');
});


// router.get('/',Sources );
// router.post('/add',AddSource);
// router.put('/update',UpdateSource);

// //op
// router.delete('/update_source',DeleteSource);



module.exports = router;

