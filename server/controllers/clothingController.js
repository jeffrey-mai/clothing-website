const db = require("../models/clothingModel.js");

const clothingModel = {};

clothingModel.getMenClothes = (req, res, next) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'men''s clothing'";
  db.query(queryString)
    .then((data) => {
      res.locals.menClothes = data;
      return next();
    })
    .catch((err) => {return next(err);});
}

clothingModel.getWomenClothes = (req, res, next) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'women''s clothing'";
  db.query(queryString)
    .then((data) => {
      res.locals.womenClothes = data;
      return next();
    })
    .catch((err) => {return next(err);});
}

clothingModel.getElectronics = (req, res, next) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'electronics'";
  db.query(queryString)
    .then((data) => {
      res.locals.electronics = data;
      return next();
    })
    .catch((err) => {return next(err);});
}

clothingModel.getJeweleries = (req, res, next) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'jewelery'";
  db.query(queryString)
    .then((data) => {
      res.locals.jeweleries = data;
      return next();
    })
    .catch((err) => {return next(err);});
}

module.exports = clothingModel;