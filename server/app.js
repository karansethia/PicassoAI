const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connect')
const userRoutes = require('./routes/user-operations')

const app = express();

// setting up cors for cross origin connection
app.use(cors({
  origin: '*'
}))

//routes
app.use('/api/v1', userRoutes);

const port = process.env.PORT || 3000;

const startServer = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port,console.log('server running'))
  } catch (error) {
    console.log(error);
  }
}
startServer()