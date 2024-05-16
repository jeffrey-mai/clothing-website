const express = require("express");
const cartController = require("../controllers/cartController.js");
const router = express.Router();

router.get("/", cartController.getCartList, (req, res) =>
  res.status(200).json(res.locals.cartList)
);

router.post("/", cartController.addToCart, (req, res) =>
  res.status(200).send("Item added to cart")
);

module.exports = router;