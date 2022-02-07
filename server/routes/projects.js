const express = require('express');
const router = express.Router();
const {Projects,AddProject,DeleteProject}=require('../db/projects/index.js');
/* GET home page. */


console.log(Projects);
router.get('/',Projects);
router.post('/add',AddProject);
// router.put('/update',UpdateProject);
router.delete('/delete',DeleteProject);

// //op

module.exports = router;
