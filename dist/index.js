'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.DB_PORT || 5003;
// Run the server!
var start = async function start() {
    try {
        await app.listen(port);
        console.log('Server run at http://localhost:' + port);
    } catch (err) {
        throw err;
    }
};

start();