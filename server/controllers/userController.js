const ApiError = require('../error/ApiError')

class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async check(req, res, next) {
    // check http://localhost:5000/api/user/auth?id=5&message=hi
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
  }
}

module.exports = new UserController()
