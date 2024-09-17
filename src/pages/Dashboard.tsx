import React from 'react';
import {Box} from "@mui/material";
import BaseLayout from "../components/BaseLayout.tsx";
import Widget from "../components/Widget.tsx";
import {DataRow} from "../components/TableComponent.tsx";
import MonthsList from "./components/MonthsList.tsx";
import TransactionsList from "./components/TransactionsList.tsx";
import MonthBalance from "./components/MonthBalance.tsx";

const rows: DataRow[] = [
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


const monthsData = [
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


const Dashboard: React.FC = () => {
    return (
        <BaseLayout>
            <Widget
                title="Entrate nel mese"
                valueToShow={"€ 1.000,00"}
                color="blue"
            />
            <Widget
                title="Uscite nel mese"
                valueToShow={"€ 500,00"}
                color="red"
            />
            <Widget
                title="Saldo nel mese"
                valueToShow={"€ 500,00"}
                color="white"
            />
            <Box>
                <span className="text-xl font-bold text-gray-900">Dettaglio mensile</span>
                <div className="mt-4">
                    <MonthBalance data={{
                        labels: ['Spese', 'Entrate', 'Investimenti', 'Risparmi'],
                        datasets: [
                            {
                                label: 'Finanze Personali',
                                data: [300, 500, 200, 100],
                                backgroundColor: [
                                    '#FF6384',  // Colore per 'Spese'
                                    '#36A2EB',  // Colore per 'Entrate'
                                    '#FFCE56',  // Colore per 'Investimenti'
                                    '#4BC0C0',  // Colore per 'Risparmi'
                                ],
                                hoverBackgroundColor: [
                                    '#FF6384AA',
                                    '#36A2EBAA',
                                    '#FFCE56AA',
                                    '#4BC0C0AA',
                                ],
                            },
                        ],
                    }}/>
                </div>
            </Box>
            <Box>
                <span className="text-xl font-bold text-gray-900">Bilanci mensili</span>
                <div className="mt-4">
                    <MonthsList months={monthsData}/>
                </div>
            </Box>
            <Box>
                <span className="text-xl font-bold text-gray-900">Transazioni mensili</span>
                <div className="mt-4">
                    <TransactionsList transactions={rows}/>
                </div>
            </Box>
        </BaseLayout>
    );
};

export default Dashboard;
