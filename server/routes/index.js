let express = require('express')
let router = express.Router()
const { UserController } = require('../controllers')
const { validate, useEmailValidation } = require('../middleware/validate')

// User routes
router.get('/users/:id', UserController.getById)
router.post(
  '/users',
  useEmailValidation(),
  validate,
  UserController.create
)
router.patch(
  '/users/:id',
  useEmailValidation(),
  validate,
  UserController.patch
)

module.exports = router
