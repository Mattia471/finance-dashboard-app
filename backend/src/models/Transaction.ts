const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    description: { type: String },
    transactionType: { type: String, enum: ['income', 'expense'], required: true },
});

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;