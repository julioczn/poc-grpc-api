const { Router } = require('express');

const CustomerController = require('./controllers/CustomerController');

const router = Router();

router.get('/customers', CustomerController.show);

module.exports = router;
