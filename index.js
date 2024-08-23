const express = require('express');
const dotenv = require('dotenv');
const {setupDatabase} = require('./dbConn');
const router = require('./routes/schoolRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', router);


setupDatabase().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Error starting the server:', err);
  process.exit(1);
});

