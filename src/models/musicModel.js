import mongoose from 'mongoose';
import { NotFoundError } from 'restify-errors';

const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  year: {
    type: Number,
    min: 1700,
    max: new Date().getFullYear(),
  },
  path: {
    type: String,
    match: /.+\.(mp3|wav)/,
  },
}, {
  timestamps: true,
});

musicSchema.set('toObject', { getters: true });

musicSchema.statics = {
  async get(id) {
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        const music = await this.findById(id).exec();
        if (music) {
          return music;
        }
      }

      throw new NotFoundError(`could not find music with id ${id}.`);
    } catch (error) {
      throw error;
    }
  },

  search({
    // TODO: search
    sortBy,
    page = 1,
    size = 10,
  }) {
    return this.find()
      .sort({ [sortBy]: -1 })
      .skip(size * (page - 1))
      .limit(parseInt(size, 10))
      .exec();
  },
};

export default mongoose.model('Music', musicSchema);
