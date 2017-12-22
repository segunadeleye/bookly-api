'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('books', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        author: {
          type: Sequelize.STRING,
        },
        edition: {
          type: Sequelize.STRING,
        },
        year: {
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.TEXT,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => queryInterface.addIndex('books', ['title']));
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('books');
  },
};
