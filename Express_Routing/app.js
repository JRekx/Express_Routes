const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query of nums with a comma-separated list of numbers.', 400);
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    };

    return res.send(result);
});

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    let numsAsStrings = req.query.nums.split(',');
    
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }
    let result = {
        operation: "median",
        result: findMedian(nums)
    };

    return res.send(result);
});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    };

    return res.send(result);
});

// Handle 404 Not Found errors
app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});

// Error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function() {
    console.log(`Server starts on port 3000`);
});
