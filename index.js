const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

app.post("/user", async (req, res) => {
    try {
        const { id, name, age, gender, email, phone_number } = req.body;
        const newUser = await pool.query("INSERT INTO account.user (id, name, age, gender, email, phone_number) VALUES ($1,$2,$3,$4,$5,$6)", [id,name,age,gender,email,phone_number]);
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log('server started');
});