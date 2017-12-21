'use strict';

/**
 * [NOTE]
 *
 * All models will be loaded directly via the sequelize.import() function.
 * You will notice that two new attributes within module.exports = (sequelize, DataType)
 * appeared. Those are going to be magically injected via sequelize.import(),
 * which is responsible for loading and defining the models.
 */

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('./../db/config/config')[env];

let db = null;

module.exports = app => {
  if (!db) {
    const modelsDir = path.resolve(__dirname);
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    fs.readdirSync(modelsDir).forEach(file => {
      const model = sequelize.import(path.join(modelsDir, file));
      db.models[model.name] = model;
    });

    for (const modelName in db.models) {
      if (db.models[modelName].associate) {
        db.models[modelName].associate(db.models);
      }
    }
  }

  return (app.db = db);
};
