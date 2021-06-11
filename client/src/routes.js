const { Router } = require('express');

const CustomerController = require('./controllers/CustomerController');

const router = Router();

router.get('/customers', CustomerController.show);
router.get('/customers/:id', CustomerController.showById);
router.post('/customers', CustomerController.create);

module.exports = router;
