const express = require('express');
const router = express.Router();
const {Projects,AddProject,DeleteProject,UpdateProject,ProjectsByName}=require('../db/projects/index.js');
/* GET home page. */
const {auth}=require('../middleware/auth')


// console.log(Projects);
router.get('/',Projects);
router.post('/byname',ProjectsByName)
router.post('/add',auth,AddProject);
router.put('/update',auth,UpdateProject);
router.delete('/delete',auth,DeleteProject);

// //op 

module.exports = router;
