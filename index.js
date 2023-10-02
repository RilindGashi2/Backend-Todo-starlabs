// index.js
const express = require("express");
const app = require('./middlewares/middleware');
const { createTodo } = require('./controllers/crudController');
const db = require('./Database/db');
const handleErrors = require('./ErrorHandler/errorhandler');

app.post('/crud', createTodo);

// Error handling middleware
app.use(handleErrors);

app.listen(8082, () => {
    console.log("listening");
});
