const Customer = require('./schemas/Customers');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async getAll (call, callback) {
    const customers = await Customer.find();
    callback(null, { customers });
  },
  async insert (call, callback) {
    let customer = call.request;

    customer.id = uuidv4();

    const resp = await Customer.create(customer);
    callback(null, resp);
  },

  async get (call, callback) {
    const { id } = call.request;
    const customer = await Customer.findOne({ id });
    callback(null, { customer });
  },

  async update (call, callback) {

  },

  async remove (call, callback) {

  },
};
