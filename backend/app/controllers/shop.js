const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .sort({createdAt: 'desc'})
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        path: '/products'
      });
    })
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
};

exports.getShop = (req, res, next) => {
  Product.find()
    .sort({createdAt: 'desc'})
    .then(products => {
      res.render('home', {
        prods: products,
        product: products[0],
        path: '/'
      });
    })
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        products: products
      });
    })
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
};