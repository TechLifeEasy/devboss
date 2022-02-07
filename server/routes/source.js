const express = require('express');
const router = express.Router();
const {auth}=require('../middleware/auth')


const {Sources,AddSource,UpdateDataSource,DeleteSource} =require('../controllers/source/index');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('source');
// });


router.get('/',Sources );
router.post('/add',auth,AddSource);
router.put('/update',auth,UpdateDataSource);
// //op
router.delete('/delete',auth,DeleteSource);



module.exports = router;

