const express = require("express");
const clothingController = require("../controllers/clothingController.js");
const router = express.Router();

router.get("/men-clothes", clothingController.getMenClothes, (req, res) =>
  res.status(200).json(res.locals.menClothes)
);

router.get("/women-clothes", clothingController.getWomenClothes, (req, res) =>
  res.status(200).json(res.locals.womenClothes)
);

router.get("/electronics", clothingController.getElectronics, (req, res) =>
  res.status(200).json(res.locals.electronics)
);

router.get("/jeweleries", clothingController.getJeweleries, (req, res) =>
  res.status(200).json(res.locals.jeweleries)
);

module.exports = router;