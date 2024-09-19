const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const transactionRoutes = require('./routes/transactionRoutes.ts');

// Carica variabili d'ambiente
dotenv.config();

// Inizializza l'app Express
const app = express();

// Middleware per gestire CORS e JSON
app.use(cors());
app.use(express.json());

// Rotte per le transazioni
app.use('/api/transactions', transactionRoutes);

// Connessione a MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Ascolta su una porta specifica
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});