const User = require('../models').User
const to = require('await-to-js').default
const { validationResult } = require('express-validator')

module.exports = {
  getById: async (req, res) => {
    const [err, user] = await to(User.findByPk(req.params.id))
    if (err) return res.status(500).send(err)
    if (!user) return res.status(404).send({ message: 'User Not Found' })
    return res.status(200).send(user)
  },
  create: async (req, res) => {
    const validErros = validationResult(req)
    if (!validErros.isEmpty()) {
      return res.status(400).json({ errors: validErros.array() });
    }

    const [err, user] = await to(User.findByPk(req.body.id))
    if (err) return res.status(500).send(err)
    if (user) return res.status(200).send(user)
    const [errCreate, newUser] = await to(User.create({
      id: req.body.id,
      shared: req.body.shared || false,
      email: req.body.email || null
    }))
    if (errCreate)  return res.status(500).send(errCreate) 
    return res.status(201).send({ user: newUser })
  },
  patch: async (req, res) => {
    const [err, user] = await to(User.findByPk(req.params.id))
    if (err) return res.status(500).send(err)
    if (!user) return res.status(404).send({ message: 'User Not Found' })
    const [errPatch] = await to(user.update({
      shared: req.body.shared,
      email: req.body.email
    }))
    if (errPatch) return res.status(400).send(err)
    return res.status(202).send(user)
  }
}
