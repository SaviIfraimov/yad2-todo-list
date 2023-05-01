const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  user: 'rodbykrf',
  host: 'isilo.db.elephantsql.com',
  database: 'rodbykrf',
  password: 'cI_e0t1Ghr0ksoLZUxFnunRGjc9lw6xa',
  dialect: 'postgres',
  define: {
    timestamps: false // disable default timestamps created_at and updated_at
  }
});

module.exports = sequelize;