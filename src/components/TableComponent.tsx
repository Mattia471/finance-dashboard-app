import React from 'react';
import dayjs from "dayjs";
import {formatCurrency} from "../utils.tsx";

type DataRow = {
    category: string;
    amount: number;
    date: string;
    description: string;
};

const rows: DataRow[] = [
    { category: 'Rent', amount: 1200, date: '2024-09-01', description: 'Pagamento mensile dell\'affitto' },
    { category: 'Groceries', amount: 250, date: '2024-09-02', description: 'Spesa settimanale' },
    { category: 'Utilities', amount: 150, date: '2024-09-05', description: 'Bollette di elettricità e acqua' },
    { category: 'Entertainment', amount: 75, date: '2024-09-10', description: 'Biglietti per il cinema e cene fuori' },
    { category: 'Savings', amount: 500, date: '2024-09-15', description: 'Contributo mensile ai risparmi' },
];

const TableComponent: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Importo</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrizione</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row) => (
                    <tr key={row.category}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(row.amount)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{dayjs(row.date).format('DD/MM/YYYY')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
