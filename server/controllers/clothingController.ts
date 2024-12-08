import { Request, Response, NextFunction } from 'express';
import db from '../models/clothingModel'

const clothingController: { [key: string]: (req: Request, res: Response, next: NextFunction) => void } = {};

clothingController.getMenClothes = (req: Request, res: Response, next: NextFunction) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'men''s clothing'";
  db.query(queryString, [])
    .then((data): void => {
      res.locals.menClothes = data;
      return next();
    })
    .catch((err: any) => {return next(err);});
}

clothingController.getWomenClothes = (req: Request, res: Response, next: NextFunction) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'women''s clothing'";
  db.query(queryString, [])
    .then((data) => {
      res.locals.womenClothes = data;
      return next();
    })
    .catch((err: any) => {return next(err);});
}

clothingController.getElectronics = (req: Request, res: Response, next: NextFunction) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'electronics'";
  db.query(queryString, [])
    .then((data) => {
      res.locals.electronics = data;
      return next();
    })
    .catch((err: any) => {return next(err);});
}

clothingController.getJeweleries = (req: Request, res: Response, next: NextFunction) => {
  const queryString = "SELECT * FROM clothes c WHERE c.category = 'jewelery'";
  db.query(queryString, [])
    .then((data) => {
      res.locals.jeweleries = data;
      return next();
    })
    .catch((err: any) => {return next(err);});
}

export default clothingController;