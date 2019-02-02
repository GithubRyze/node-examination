const express = require('express');
const config = require('./config/default');
const router = require('./routers/player.js');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const winston = require('winston');
const expressWinston = require('express-winston');
const bodyParser = require('body-parser');
const app = express();
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', '3.2.1');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }

});
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie
}));
app.use(expressWinston.logger({
    transports: [
        new (winston.transports.Console)({
            json: true,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'logs/success.log'
        })
    ]
}));
app.use(router);
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'logs/error.log'
        })
    ]
}));
app.use((err, req, res, next) => {
    if (err){
        res.status(err.code).json(err);
    }
});
module.exports = app;
//app.listen(config.port);