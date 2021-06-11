const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const implementation = require('./implementation');

require('./database');

const packageDefinition = protoLoader.loadSync(
  path.resolve('../', 'proto', 'customers.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.CustomerService.service, implementation);
server.bind('0.0.0.0:4000', grpc.ServerCredentials.createInsecure());
server.start();
