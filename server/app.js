let express = require('express')
let router = require('./routes')

let app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.use(function(req, res, next) {
  res.status(404).send({ error: 'Not found' })
})

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).send({ error: err })
})

module.exports = app