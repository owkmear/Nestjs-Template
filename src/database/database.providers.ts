import * as mongoose from 'mongoose';
import configuration from '../config/configuration';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      const { database: { url } } = configuration();
      return await mongoose.connect(url);
    }
  },
];
