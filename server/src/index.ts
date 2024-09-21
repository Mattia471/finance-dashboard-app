const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes.ts');

const mongoURI = "mongodb+srv://admin-mattia:OeWKBhFbDdBtOidC@cluster0.uyapjqy.mongodb.net/finance?retryWrites=true&w=majority&appName=Cluster0";

// Inizializza l'app Express
const app = express();

// Middleware per gestire CORS e JSON
app.use(cors());
app.use(express.json());

// Rotte per le transazioni
app.use('/api/transactions', transactionRoutes);

// Connessione a MongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Ascolta su una porta specifica
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});