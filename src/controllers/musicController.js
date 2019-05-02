import { NotFoundError } from 'restify-errors';
import Music from '../models/musicModel';

/**
 * GET /music/:id
 * @param  req
 * @param  res
 * @param  {Function} next
 * @return {Promise}
 */
const getCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const music = await Music.get(id);
    if (music) {
      return res.json(music);
    }
    throw new NotFoundError(`could not find music with id ${id}.`);
  } catch (error) {
    return next(error);
  }
};

/**
 * GET /music
 * @param  req
 * @param  res
 * @param  {Function} next
 * @return {Promise}
 */
const listCtrl = async (req, res, next) => {
  try {
    const musicList = await Music.search(req.query);
    return res.json(musicList);
  } catch (error) {
    return next(error);
  }
};

/**
 * POST /music
 * @param  req
 * @param  res
 * @param  {Function} next
 * @return {Promise}
 */
const postCtrl = async (req, res, next) => {
  try {
    return res.json(req.body);
  } catch (error) {
    return next(error);
  }
};

/**
 * PUT /music/:id
 * @param  req
 * @param  res
 * @param  {Function} next
 * @return {Promise}
 */
const updateCtrl = async (req, res, next) => {
  try {
    return res.json(req.body);
  } catch (error) {
    return next(error);
  }
};

/**
 * DELETE /music/:id
 * @param  req
 * @param  res
 * @param  {Function} next
 * @return {Promise}
 */
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
