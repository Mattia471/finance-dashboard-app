import dayjs from "dayjs";
import {formatCurrency} from "../utils.tsx";

type DataRow = {
    category: string;
    amount: number;
    date: string;
    description: string;
    transactionType: 'income' | 'expense';
};

const ExpenseCard = ({row}: { row: DataRow }) => {
    return (
        <div key={row.category} className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{row.category}</h3>
                <p className="text-sm text-gray-500">{dayjs(row.date).format('DD/MM/YYYY')}</p>
            </div>
            <p className="text-sm text-gray-600 mt-2">{row.description}</p>
            <div className="mt-4 flex items-center justify-between">
                {/* Tipo di transazione spostato in basso a sinistra */}
                <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                            ${row.transactionType === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {row.transactionType === 'income' ? 'Entrata' : 'Uscita'}
                        </span>
                <span className="text-xl font-bold text-gray-900">
                    {row.transactionType === 'income' ? '+' : '-'}
                    {formatCurrency(row.amount)}</span>
            </div>
        </div>
    );
};

export default ExpenseCard;
