import { Router, Request, Response } from 'express';
import clothingController from '../controllers/clothingController';

const router = Router();

router.get("/men-clothes", clothingController.getMenClothes, (req: Request, res: Response) =>
  res.status(200).json(res.locals.menClothes)
);

router.get("/women-clothes", clothingController.getWomenClothes, (req: Request, res: Response) =>
  res.status(200).json(res.locals.womenClothes)
);

router.get("/electronics", clothingController.getElectronics, (req: Request, res: Response) =>
  res.status(200).json(res.locals.electronics)
);

router.get("/jeweleries", clothingController.getJeweleries, (req: Request, res: Response) =>
  res.status(200).json(res.locals.jeweleries)
);

export default router;