var express = require('express');
var app = express();
require('./index.js')(app);
var port = (process.env.PORT || 3030);
var server = app.listen(port, function () {
 })