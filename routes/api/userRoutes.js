const router = require('express').Router();
const {
  getUsers,
  getSinglUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/UserController.js');


router.route('/').get(getUsers).post(createUser);

router
  .route('/:UserId')
  .get(getSinglUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router