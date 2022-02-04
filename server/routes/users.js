const express = require('express');
const router = express.Router();

const {auth}=require('../middleware/auth')


const {
  SignIn,
  SignUp,
  Users,
  UsersUpdate
} = require('../controllers/users/index')

/* GET home page. */
router.get('/',Users );
router.post('/sign_in', SignIn);
router.post('/sign_up', SignUp);
router.put('/update', auth,UsersUpdate);

module.exports = router;
