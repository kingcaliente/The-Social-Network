const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addAssignment,
  removeAssignment,
} = require('../../controllers/Though-Controller');


router.route('/').get(getThoughts).post(createThought);


router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought);


router.route('/:ThoughtId/assignments').post(addAssignment);

router.route('/:ThoughtId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;