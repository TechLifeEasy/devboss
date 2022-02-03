const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('project');
});


// router.get('/',Projects);
// router.post('/add',AddProject);
// router.put('/update',UpdateProject);


// //op
// router.delete('/delete',DeleteProject);

module.exports = router;
