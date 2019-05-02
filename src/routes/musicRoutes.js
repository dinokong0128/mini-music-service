import express from 'express';
import {
  getCtrl,
  listCtrl,
  postCtrl,
  updateCtrl,
  deleteCtrl,
} from '../controllers/musicController';

const router = express.Router();

router
  .route('/:id')
  .get(getCtrl)
  .put(updateCtrl)
  .delete(deleteCtrl);

router
  .route('/')
  .get(listCtrl)
  .post(postCtrl);

export default router;
