const PROTO_PATH = '../proto/customers.proto';
const load = require('./baseService');

const CustomerClient = load({
  serviceName: 'CustomerService',
  protoPath: PROTO_PATH,
  address: 'localhost:4000',
});

module.exports = CustomerClient;
