'use strict';

module.exports = (sequelize, DataType) => {
  const Book = sequelize.define('book', {
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    author: DataType.STRING,
    edition: DataType.STRING,
    year: DataType.INTEGER,
    description: DataType.TEXT,
  });

  Book.associate = models => {
    Book.belongsTo(models.user);
  };

  return Book;
};
