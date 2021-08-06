let express = require('express')
let router = express.Router()
const { body } = require('express-validator')
const { UserController } = require('../controllers')
const { emailValidOrNull } = require('../middleware/validate')

// User routes
router.get('/users/:id', UserController.getById)
router.post(
  '/users',
  emailValidOrNull,
  UserController.create
)
router.patch(
  '/users/:id',
  emailValidOrNull,
  UserController.patch
)

module.exports = router
