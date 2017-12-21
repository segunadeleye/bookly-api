module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: '127.0.0.1',
    database: 'bookly_development',
    dialect: 'mysql',
    migrationStorageTableName: 'sequelize_meta',
    define: {
      underscored: true,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: '127.0.0.1',
    database: 'bookly_test',
    dialect: 'mysql',
    migrationStorageTableName: 'sequelize_meta',
    define: {
      underscored: true,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    dialect: 'mysql',
    migrationStorageTableName: 'sequelize_meta',
    define: {
      underscored: true,
    },
  },
};
