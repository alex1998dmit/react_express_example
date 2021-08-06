const { body, validationResult } = require('express-validator');

module.exports = {
  emailValidOrNull: 
    body('email')
      .isEmail()
      .optional({ nullable: true })
      .custom((req) => {
        const validErros = validationResult(req)
          if (!validErros.isEmpty()) {
            return res.status(400).json({ errors: validErros.array() });
          }
      })
}