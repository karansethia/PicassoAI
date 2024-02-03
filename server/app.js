const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/mongo')
const userRoutes = require('./routes/user-operations');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/error-handler');

const app = express();

// setting up cors for cross origin connection
const allowedOrigins = ['https://picasso-ai-two.vercel.app/'];

// Enable CORS for all routes
app.use(cors({
  origin: function (origin, callback) {
    // Check if the request origin is in the allowed origins list
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json())

//routes
app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);
app.use(errorHandler)

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