const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const sequelize = require('./config/db/database');

// Connect with SequelizeORM to the PostgreSQL database.
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL using Sequelize succeeded.');
  })
  .catch((err) => {
    console.error('Unable to connect to PostgreSQL using Sequelize. Error:', err);
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/task', taskRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});