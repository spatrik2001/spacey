const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', function(req, res, next) {
    Product
    .find()
    .then(products => {
        res.status(200).json(products);
    })
});

module.exports = router;