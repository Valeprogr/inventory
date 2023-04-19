"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var config_1 = require("./api/config/config");
var Item_1 = require("./api/routes/Item");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
//Connection with Mongo
mongoose_1.default.connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(function () {
    console.log('Connect to mongo');
    //Call function for start server
    StartServer();
})
    .catch(function (error) {
    console.log(error);
});
//Function start server
var StartServer = function () {
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use(function (req, res, next) {
        //Puoi fare richiesta da qualsiasi dominio
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'ORIGIN, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    //Routes
    app.use('/items', Item_1.default);
    //HealthCheck
    app.get('/ping', function (req, res, next) {
        res.status(200).json({ message: 'pong' });
    });
    //Errors Handling
    app.use(function (req, res, next) {
        var error = new Error('not found');
        return res.status(404).json({ message: error.message });
    });
    app.listen(config_1.config.server.port, function () { return console.log("Server is running on port ".concat(config_1.config.server.port, ".")); });
};