
const getCtrl = async (req, res, next) => {
  try {
    return res.json(req.params.id);
  } catch (error) {
    return next(error);
  }
};

const listCtrl = async (req, res, next) => {
  try {
    return res.json(req.query);
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
