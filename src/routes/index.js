import { Router } from 'express';
import licoresRouter from './licores.routes.js';
import cartsRouter from './carts.routes.js';

const router = Router();

router.use('/licores', licoresRouter);
router.use('/carts', cartsRouter);

export default router;