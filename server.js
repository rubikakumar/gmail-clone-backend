require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');

connectDB();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/emails', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
