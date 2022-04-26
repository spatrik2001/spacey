const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', function(req, res, next) {
    const createdAt = req.params.createdAt;
    Product
    .find()
    .sort({[createdAt]: -1})
    .then(products => {
        res.status(200).json(products);
    })
});

router.get('/:productId', function(req, res, next) {
    const prodId = req.params.productId;
    Product
    .findById(prodId)
    .then(result => {
        res.status(200).json(result);
    })
});

module.exports = router;