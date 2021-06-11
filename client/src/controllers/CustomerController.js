const CustomerService = require('../services/customer');

class CustomerController {
  async show(req, res) {
    const response = await CustomerService.getAll({});

    return res.json(response);
  }
}

module.exports = new CustomerController();
