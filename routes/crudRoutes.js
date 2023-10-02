const express = require('express');
const { createTodo } = require('../controllers/crudController'); // Adjusted path
const router = express.Router();

router.post('/crud', createTodo);

module.exports = router;
