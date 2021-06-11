const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { promisify } = require('util');

module.exports = function load({
  serviceName,
  address,
  protoPath,
  credentials = grpc.credentials.createInsecure(),
}) {
  const protoDef = protoLoader.loadSync(
    protoPath,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }
  );

  const proto = grpc.loadPackageDefinition(protoDef)[serviceName];

  const client = new proto(address, credentials);

  // Promisify all client methods
  Object.entries(client.__proto__).map(([ prop, value ]) => {
    if (value.originalName !== undefined) {
      client[prop] = promisify(value);
    }
  });

  return client;
};
