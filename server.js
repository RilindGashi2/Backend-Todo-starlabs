
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})
app.post('/crud', (req, res) => {

    const sql = "INSERT INTO todo(`text`) VALUES (?)";
    const values = [
        req.body.text,

    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            // return res.json("ERROR");
            console.log("error")
        }
        return res.json(data);
    })
})

app.listen(8082, () => {
    console.log("listening");
})