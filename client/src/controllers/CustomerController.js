const CustomerService = require('../services/customer');

class CustomerController {
  async show(req, res) {
    const response = await CustomerService.getAll({});

    return res.json(response);
  }

  async showById(req, res) {
    const response = await CustomerService.get(req.params);

    return res.json(response);
  }

  async create(req, res) {
    const response = await CustomerService.insert(req.body);

    return res.json(response);
  }
}

module.exports = new CustomerController();
