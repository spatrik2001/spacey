const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Új termékek és azoknak rendezése létrehozás dátuma szerint csökkenő sorrendbe
router.get('/new', function(req, res, next) {
    const createdAt = req.params.createdAt;
    Product
    .find()
    .sort('-createdAt')
    .then(products => {
        res.status(200).json(products);
    })
});


// Az összes termék kilistázása
router.get('/', function(req, res, next) {
    Product
    .find()
    .then(products => {
        res.status(200).json(products);
    })
});

// Termék megjelenítése a megadott ID alapján
router.get('/:productId', function(req, res, next) {
    const prodId = req.params.productId;
    Product
    .findById(prodId)
    .then(result => {
        res.status(200).json(result);
    })
});

module.exports = router;