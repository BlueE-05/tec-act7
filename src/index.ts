// Capas: db -> controller -> handler -> routes -> Postman
//import express from 'express';
const express = require('express');

const app = express();

import tweetsRoutes from './routes/tweets';
import userRoutes from './routes/users';

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api/tweets', tweetsRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));