import Sequelize from 'sequelize';
import { database } from './lib/config';

let db;

module.exports = () => {
  if (!db) {
    const sequelize = new Sequelize(
      database.name,
      database.username,
      database.password,
      database.params
    );
    db = { sequelize }
  }
  return db;
}
