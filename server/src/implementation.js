const Customer = require('./schemas/Customers');

module.exports = {
  async getAll (call, callback) {
    const customers = await Customer.find();
    callback(null, { customers });
  },
  async insert (call, callback) {

  },

  async get (call, callback) {

  },

  async update (call, callback) {

  },

  async remove (call, callback) {

  },
};
