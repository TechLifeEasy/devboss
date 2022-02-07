const express = require('express');
const router = express.Router();
const {Projects,AddProject}=require('../db/projects/index.js');
/* GET home page. */


console.log(Projects);
router.get('/',Projects);
router.post('/add',AddProject);
// router.put('/update',UpdateProject);


// //op
// router.delete('/delete',DeleteProject);

module.exports = router;
