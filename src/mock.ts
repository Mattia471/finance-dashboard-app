import {Transaction} from "./types.ts";

export const transactionsMock: Transaction[] = [
    {
        category: 'Rent',
        amount: 1200,
        date: '2024-09-01',
        description: 'Pagamento mensile dell\'affitto',
        transactionType: 'income'
    },
    {
        category: 'Groceries',
        amount: 250,
        date: '2024-09-02',
        description: 'Spesa settimanale',
        transactionType: 'expense'
    },
    {
        category: 'Utilities',
        amount: 150,
        date: '2024-09-05',
        description: 'Bollette di elettricità e acqua',
        transactionType: 'expense'
    },
    {
        category: 'Entertainment',
        amount: 75,
        date: '2024-09-10',
        description: 'Biglietti per il cinema e cene fuori',
        transactionType: 'expense'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    },
    {
        category: 'Savings',
        amount: 500,
        date: '2024-09-15',
        description: 'Contributo mensile ai risparmi',
        transactionType: 'income'
    }
];


export const monthsBalanceMock = [
    {
        category: "Gennaio",
        amount: 200,
        selected: false
    },
    {
        category: "Febbraio",
        amount: 150,
        selected: false
    },
    {
        category: "Marzo",
        amount: 100,
        selected: false
    },
    {
        category: "Aprile",
        amount: 50,
        selected: false
    },
    {
        category: "Maggio",
        amount: 50,
        selected: false
    },
    {
        category: "Giugno",
        amount: 50,
        selected: false
    },
    {
        category: "Luglio",
        amount: 50,
        selected: false
    },
    {
        category: "Agosto",
        amount: 50,
        selected: false
    },
    {
        category: "Settembre",
        amount: 50,
        selected: true
    },
    {
        category: "Ottobre",
        amount: 50,
        selected: false
    },
    {
        category: "Novembre",
        amount: 50,
        selected: false
    },
    {
        category: "Dicembre",
        amount: 50,
        selected: false
    }
]