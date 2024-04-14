const express = require("express");
const clothingController = require("../controllers/clothingController.js");
const router = express.Router();

router.get("/men", clothingController.getMenClothes, (req, res) =>
  res.status(200).json(res.locals.menClothes)
);

module.exports = router;