import express from 'express';
import musicRoutes from './musicRoutes';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.send('index'));

router.use('/music', musicRoutes);

export default router;
