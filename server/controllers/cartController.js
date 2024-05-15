const db = require("../models/clothingModel.js");

const cartController = {};

cartController.getCartList = (req, res, next) => {
  const queryString = "SELECT * FROM mycart";
  db.query(queryString)
    .then((data) => {
      res.locals.cartList = data;
      return next();
    })
    .catch((err) => {return next(err);});
}

cartController.addToCart = (req, res, next) => {
  console.log('addToCart');
  console.log(req.body);
  const { id, title, price, image, color, size, quantity } = req.body;
  const queryString = `
    INSERT INTO myCart (id, title, price, image, color, size, quantity)
    VALUES (${id}, ${title}, ${price}, ${image}, ${color}, ${size}, ${quantity});
  `;
  db.query(queryString)
    .then((data) => {
      console.log('addToCart middleware used');
      return next();
    })
    .catch((err) => {return next(err);});
}

module.exports = cartController;