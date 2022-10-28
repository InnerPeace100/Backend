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
        const newUser = await pool.query("INSERT INTO account.user (id, name, age, gender, email, phone_number) VALUES ($1,$2,$3,$4,$5,$6)", [id, name, age, gender, email, phone_number]);
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
});

//get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM account.user")
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get user
app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const getUser = await pool.query("SELECT * FROM account.user WHERE id = $1", [id]);
        res.json(getUser.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//update user
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, email, phone_number } = req.body;
        const updateUser = await pool.query("UPDATE account.user SET name = $1, age=$2, gender = $3, email = $4, phone_number = $5 WHERE id = $6", [name, age, gender, email, phone_number, id]);
        res.json(updateUser.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//delete user
app.delete("/users/:id", async(req, res) => {
     try {
        const {id} = req.params;
        const deleteUser = await pool.query("DELETE FROM account.user WHERE id = $1", [id]);
        res.json("To Do Was Deleted!");
     } catch (error) {
        console.error(error.message);
     }
});

app.listen(5000, () => {
    console.log('server started');
});