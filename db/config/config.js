const defaultConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: '127.0.0.1',
  dialect: 'mysql',
  migrationStorageTableName: 'sequelize_meta',
};

module.exports = {
  development: {
    ...defaultConfig,
    database: 'bookly_development',
  },
  test: {
    ...defaultConfig,
    database: 'bookly_test',
  },
  production: {
    ...defaultConfig,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
  },
};
