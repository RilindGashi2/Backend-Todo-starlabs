// controllers/crudController.js

const db = require('../Database/db');

const createTodo = (req, res) => {
    const sql = "INSERT INTO todo (`text`) VALUES (?)";
    const values = [req.body.text];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "An error occurred while inserting data." });
        }
        // Assuming your database returns the inserted data with an ID
        const insertedTodo = {
            id: data.insertId,
            text: req.body.text,
        };
        return res.json(insertedTodo);
    });
};

module.exports = {
    createTodo,
};
