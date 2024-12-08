import { Router, Request, Response } from 'express';
import cartController from '../controllers/cartController';

const router = Router();

router.get("/", cartController.getCartList, (req: Request, res: Response) =>
  res.status(200).json(res.locals.cartList)
);

router.post("/", cartController.addToCart, (req: Request, res: Response) =>
  res.status(200).send("Item added to cart")
);

router.delete("/", cartController.deleteCartItem, (req: Request, res: Response) =>
  res.status(200).send("Item deleted")
);

export default router;