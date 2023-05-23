// server.js
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
app.use('/api', routes);

const port = 3500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
