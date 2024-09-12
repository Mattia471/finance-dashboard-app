import express from 'express';
import Transaction from '../models/Transaction';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel salvataggio della transazione' });
    }
});

router.get('/', async (_req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle transazioni' });
    }
});

export default router;
