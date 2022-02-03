const express = require('express');
const router = express.Router();

const {
  SignIn,
  SignUp,
  Users
} = require('../controllers/users/index')

/* GET home page. */
router.get('/',Users );
router.post('/sign_in', SignIn);
router.post('/sign_up', SignUp);
// router.put('/update', Update);

module.exports = router;
