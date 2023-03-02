const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const db = mysql.createPool
({
    host: "brtploi5rrby99qjfamm-mysql.services.clever-cloud.com",
    user: "u8trsxgxjqyefuc4",
    password: "JUzdQ4uhnLRpieg3ejRT",
    database: "brtploi5rrby99qjfamm"
});

app.post("/api/registerUser", (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const isAdmin = false;

    const registerUserSQL = 
    `INSERT INTO USER 
    (USERNAME, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, IS_ADMIN)

    VALUES
    (?, ?, ?, ?, ?, ?)`;

    db.query(registerUserSQL, 
    [
        username, 
        password,
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