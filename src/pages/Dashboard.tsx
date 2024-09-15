import React from 'react';
import {Box} from "@mui/material";
import BaseLayout from "../components/BaseLayout.tsx";
import Widget from "../components/Widget.tsx";
import CardList from "../components/CardList.tsx";
import TableComponent, {DataRow} from "../components/TableComponent.tsx";

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


const Dashboard: React.FC = () => {
    return (
        <BaseLayout>
            <Widget
                title="Entrate nel mese"
                valueToShow={"€ 1.000,00"}
                color="green"
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
                <span className="text-xl font-bold text-gray-900">Transazioni recenti</span>
                <div className="mt-4">
                    <TableComponent rows={rows}/>
                </div>
            </Box>
            <Box>
                <span className="text-xl font-bold text-gray-900">Categorie di spesa</span>
                <div className="mt-4">
                    <CardList transactions={rows}/>
                </div>
            </Box>
            <Box>
                <span className="text-xl font-bold text-gray-900">Bilanci mensili</span>
                <div className="mt-4">
                    <CardList transactions={rows}/>
                </div>
            </Box>
        </BaseLayout>
    );
};

export default Dashboard;
