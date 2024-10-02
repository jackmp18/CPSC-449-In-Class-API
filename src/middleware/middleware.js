var express = require('express');
var app = express();

// prints log to terminal every request
const myLogger = function (req, res, next) {
    console.log("LOGGED")
    next()
}

app.use(myLogger)

app.listen(3000);