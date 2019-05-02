import mongoose from 'mongoose';

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
  search: ({
    // TODO: search
    sortBy,
    page = 1,
    size = 10,
  }) => this.find()
    .sort({ [sortBy]: -1 })
    .skip(size * (page - 1))
    .limit(size)
    .exec(),
};


export default mongoose.model('Music', musicSchema);
