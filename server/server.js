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

/*
=============
Register API:
=============
*/

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
        if (error) 
        {
            res.send({err: error})
        }

        if (result.length > 0)
        {
            res.send({message: true});
        }

        else
        {
            res.send({message: false});
        }
    });
})

/*
==========
Login API:
==========

Compared to what happens when registering a new user, the process for signing 
into an existing account is somewhat different. Whilst a variable (loginUserSQL) 
is declared to store the string representing our query to the database, notice 
how it only involves the username; due to how bcrypt works, we can't simply take 
what the user submits as their password, hash it, bind parameters, and compare 
strings. Instead, we must first determine whether a user with the specified 
username exists. If yes, we retrieve that particular user's hashed password from 
the database and invoke bcrypt's compareSync method to verify a match between 
the plain-text password and the hashed password.
*/

app.post("/api/loginUser", async (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;

    const loginUserSQL =
    `SELECT
    *
    
    FROM
    USER
    
    WHERE
    USERNAME = ?`;

    db.query(loginUserSQL, 
    [
        username
    ], (error, result) => 
    {
        if (error) 
        {
            res.send({err: error})
        }

        /*
        If there aren't any errors – and our query returns a result with a length 
        greater than 0 (meaning a matching row was found) - for that particular 
        record/user, get the hashed password and use bcrypt's compareSync method 
        to compare it with the plain-text password that was sent to us by the user.
        */

        if (result.length > 0)
        {
            const hashPassword = result[0]["PASSWORD"];
            const isValidPassword = bcrypt.compareSync(password, hashPassword);

            // If, for the username specified, both passwords (hashed and plain-text) 
            // match, return true:

            if (isValidPassword)
            {
                res.send({message: true});
            }

            // If, for the username specified, there's a mismatch between the hashed 
            // password stored in the database and the plain-text password submitted 
            // by the user, return false: 

            else
            {
                res.send({message: false});
            }
        }

        // If the specified username has no matches in the database, return false:

        else
        {
            res.send({message: false});
        }
    });
})

/*
===================
Fetch Products API:
===================
*/

app.get("/api/fetchProducts", async (req, res) =>
{
    const fetchProductsSQL = 
    `SELECT 
    *

    FROM
    PRODUCT

    WHERE
    CATEGORY_ID = 1

    ORDER BY
    CATEGORY_ID ASC`;
    
    db.query(fetchProductsSQL, (error, result) => {
        res.send(result);
    });
})

app.listen(5000, () =>
{
    console.log("Server running on port 5000!");
});