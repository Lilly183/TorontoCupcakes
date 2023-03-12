const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const app = express();
const saltRounds = 10;

app.use(express.json());

const db = mysql.createPool
({
    host: "brtploi5rrby99qjfamm-mysql.services.clever-cloud.com",
    user: "u8trsxgxjqyefuc4",
    password: "JUzdQ4uhnLRpieg3ejRT",
    database: "brtploi5rrby99qjfamm"
});

app.post("/api/registerUser", async (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const isAdmin = false;

    // Hash the password via bcrypt (Never store passwords in plain text!):
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const registerUserSQL = 
    `INSERT INTO USER 
    (USERNAME, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, IS_ADMIN)

    VALUES
    (?, ?, ?, ?, ?, ?)`;

    db.query(registerUserSQL, 
    [
        username, 
        hashPassword,
        email,
        firstName,
        lastName,
        isAdmin
    ], (error, result) =>
    {
        console.log(result);
    });
})

app.listen(5000, () =>
{
    console.log("Server running on port 5000");
});