class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async check(req, res) {
    // check http://localhost:5000/api/user/auth?id=5&message=hi
    const query = req.query
    res.json(query)
  }
}

module.exports = new UserController()
