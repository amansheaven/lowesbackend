var mongoose = require('mongoose')
import secrets from '../config'

export default async () => {
    const connection = await mongoose.connect(secrets.databaseURL, { useNewUrlParser: true });
    return connection.connection.db;
  };