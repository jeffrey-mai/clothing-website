const db = require("../models/clothingModel.js");

const clothingModel = {};

clothingModel.getMenClothes = (req, res, next) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'men''s clothing'";
  db.query(queryString)
    .then((data) => {
      console.log(data)
      res.locals.menClothes = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
}

module.exports = clothingModel;