module.exports = {
  database: {
    name: `bookly_${ process.env.NODE_ENV || 'development' }`,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    params: {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      define: {
        underscored: true
      }
    }
  }
}
