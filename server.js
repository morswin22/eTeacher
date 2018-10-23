const initDB = require("./db").initDb;
const getDB = require("./db").getDb;
const assert = require('assert');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.json());      
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
    secret: "KusKus",
    resave: true,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    // check if i am logged :)
    if (req.session.logged && req.session.email && req.session.pass) {
        const db = getDB();
        db.collection('users').findOne({email: req.session.email, pass: req.session.pass}, (err, result)=>{
            if (err) {
                req.session.logged = false;
                req.cookies.logged = false;
            }
        });
    } else {
        req.session.logged = false;
        req.cookies.logged = false;
    }
    next();
});

app.use(express.static('static'));

app.post('/login', (req, res) => {
    if (req.body.email && req.body.pass) {
        const db = getDB();
        db.collection('users').findOne({email: req.body.email, pass: req.body.pass}, (err, result)=>{
            if (!err) {
                req.session.logged = true;
                req.cookies.logged = true;
                req.session.email = result.email;
                req.session.pass = result.pass;
                req.session.save();
            } else {
                console.log(err);
            }
        });
    }
    res.redirect('/');
});

app.get('/test/:name', (req,res)=>{
    const db = getDB();
    db.collection('users').findOne({name: req.params.name}, (err, result) => {
        if (!err && result) {
            res.send(result.email);
        } else {
            console.log(err, result);
            res.sendStatus(500);
        }
    });
});

initDB(function (err) {
    app.listen(port, err => {
        if (err) {
            throw err;
        }
        console.log(`App is listening on port ${port}!`);
    });
});