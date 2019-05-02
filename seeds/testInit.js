import seeder from 'mongoose-seed';
import { mongoUri } from '../config';
import musicData from './musicData';

seeder.connect(mongoUri, () => {
  // Load Mongoose models
  seeder.loadModels([
    'src/models/musicModel.js',
  ]);

  // Clear specified collections
  seeder.clearModels(['Music'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(musicData, () => {
      seeder.disconnect();
    });
  });
});
