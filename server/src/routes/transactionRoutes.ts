const express = require('express');
const uuidv4 = require("uuid").v4;
const Transaction = require('../models/Transaction.ts');

const router = express.Router();

// Crea una nuova transazione (POST /api/transactions)
router.post('/', async (req, res) => {
    try {
        const newTransaction = new Transaction({
            uid: uuidv4(), // Genera un uid unico
            category: req.body.category,
            amount: req.body.amount,
            date: req.body.date,
            description: req.body.description,
            transactionType: req.body.transactionType,
        });

        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel salvataggio della transazione' });
    }
});

// Visualizza tutte le transazioni (GET /api/transactions)
router.get('/', async (_req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle transazioni' });
    }
});

// Visualizza una singola transazione tramite uid (GET /api/transactions/:uid)
router.get('/:uid', async (req, res) => {
    try {
        const transaction = await Transaction.findOne({ uid: req.params.uid });
        if (!transaction) {
            return res.status(404).json({ error: 'Transazione non trovata' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero della transazione' });
    }
});

// Aggiorna una transazione tramite uid (PUT /api/transactions/:uid)
router.put('/:uid', async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findOneAndUpdate(
            { uid: req.params.uid },
            {
                category: req.body.category,
                amount: req.body.amount,
                date: req.body.date,
                description: req.body.description,
                transactionType: req.body.transactionType,
            },
            { new: true }
        );

        if (!updatedTransaction) {
            return res.status(404).json({ error: 'Transazione non trovata' });
        }

        res.json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'aggiornamento della transazione' });
    }
});

// Elimina una transazione tramite uid (DELETE /api/transactions/:uid)
router.delete('/:uid', async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findOneAndDelete({ uid: req.params.uid });

        if (!deletedTransaction) {
            return res.status(404).json({ error: 'Transazione non trovata' });
        }

        res.json({ message: 'Transazione eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione della transazione' });
    }
});

module.exports = router;
