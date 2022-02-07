const express = require('express');
const router = express.Router();
const {auth}=require('../middleware/auth')
const {Finds,AddFind,DeleteFind} =require('../db/find/index.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('find');
// });


router.get('/',Finds);
router.post('/add',auth,AddFind);
// router.put('/update',UpdateFind);
router.delete('/delete',DeleteFind);


module.exports = router;
