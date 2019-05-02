import { NotFoundError } from 'restify-errors';
import Music from '../models/musicModel';

const getCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const music = await Music.findBiId(id);
    if (music) {
      return res.json(music);
    }
    throw new NotFoundError(`could not find music with id ${id}.`);
  } catch (error) {
    return next(error);
  }
};

const listCtrl = async (req, res, next) => {
  try {
    const musicList = await Music.search(req.query);
    return res.json(musicList);
  } catch (error) {
    return next(error);
  }
};

const postCtrl = async (req, res, next) => {
  try {
    return res.json(req.body);
  } catch (error) {
    return next(error);
  }
};

const updateCtrl = async (req, res, next) => {
  try {
    return res.json(req.body);
  } catch (error) {
    return next(error);
  }
};

const deleteCtrl = async (req, res, next) => {
  try {
    return res.json(req.params.id);
  } catch (error) {
    return next(error);
  }
};

export {
  getCtrl,
  listCtrl,
  postCtrl,
  updateCtrl,
  deleteCtrl,
};
