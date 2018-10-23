const assert = require("assert");
const client = require("mongodb").MongoClient;
const config = require("./config");

let _db;

function initDb(callback) {
    if (_db) {
        console.warn("Trying to init MongoDB again!");
        return callback(null, _db);
    }
    client.connect(config.db.url, config.db.options, (err, db)=> {
        if (err) {
            return callback(err);
        }
        console.log("MongoDB initialized - connected to: " + config.db.database);
        _db = db.db(config.db.database);
        return callback(null, _db);
    });
}

function getDb() {
    assert.ok(_db, "MongoDB has not been initialized. Please call init first.");
    return _db;
}

module.exports = {
    getDb,
    initDb
};