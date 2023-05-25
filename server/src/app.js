// Setup the web server
const express  = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');

const app = express();

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes)
    message: 'Too many request please try again later',
});

app.use(morgan('dev'));
app.use(rateLimiter);
app.use(xssClean());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User Router
app.use('/api/users', userRouter);

app.get("/test", (req, res)=>{
    res.status(200).send({
        message: 'API Testing is working fine',
    });
});

// Client Error handling
app.use((req, res, next) =>{
    next(createError(404, 'Opps...! Route not found, please check the URL'));
});

// Server Error handling - all the errors
app.use((err, req, res, next) => {
    return res.status(err.status || 500 ).json({
        success: false,
        message: err.message,
    });
});

module.exports = app;


