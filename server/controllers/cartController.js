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
  const { id, title, price, image, color, size, quantity } = req.body;
  const queryString = `
    INSERT INTO myCart (id, title, price, image, color, size, quantity)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  db.query(queryString, [id, title, price, image, color, size, quantity])
    .then((data) => {
      console.log('addToCart middleware used');
      return next();
    })
    .catch((err) => {return next(err);});
}

cartController.deleteCartItem = (req, res, next) => {
  const { id } = req.query;
  const queryString = `
    DELETE FROM mycart
    WHERE id = ${id};
  `;
  db.query(queryString)
    .then((data) => {
      console.log('deleteCartItem middleware used');
      return next();
    })
    .catch((err) => {return next(err);});
}

module.exports = cartController;