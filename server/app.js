const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/mongo')
const userRoutes = require('./routes/user-operations');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/error-handler');
const cookieParser = require('cookie-parser')

const app = express();

const corsOptions = {
  origin: ['https://picasso-ai-two.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // You need this if you are using cookies for authentication
};

app.use(cors(corsOptions));


app.use(express.json())
app.use(cookieParser())

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