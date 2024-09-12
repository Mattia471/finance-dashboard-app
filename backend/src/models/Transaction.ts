import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    category: { type: String, required: true },
    description: { type: String },
});

export default mongoose.model('Transaction', TransactionSchema);
