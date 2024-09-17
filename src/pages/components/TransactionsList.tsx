import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import {formatCurrency} from "../../utils.tsx";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

const TransactionsList = ({transactions}) => {
    const [transactionsList, setTransactionsList] = useState(transactions);

    useEffect(() => {
        setTransactionsList(transactions);
    }, [transactions]);

    const transactionTypeStyles = (type) =>
        type === 'income' ? 'text-green-500' : 'text-red-500';

    return (
        <div className="bg-white rounded-xl shadow-md overflow-y-scroll w-full max-h-96">
            <ul className="divide-y divide-gray-200">
                {transactionsList.map((transaction, index) => (
                    <li key={index}
                        onClick={() => {
                            const newTransactions = transactionsList.map((t, i) => {
                                if (i === index) {
                                    t.selected = !t.selected;
                                } else {
                                    t.selected = false;
                                }
                                return t;
                            });
                            setTransactionsList(newTransactions);
                        }}
                        className={`p-4 flex items-start space-x-4 text-gray-900`}>
                        {/* Icona transazione */}
                        <div
                            className={`flex-shrink-0 rounded-full p-3 text-white  ${transaction.transactionType === 'income' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {transaction.transactionType === 'income' ? <ArrowUpward/> : <ArrowDownward/>}
                        </div>
                        {/* Dettagli transazione */}
                        <div className="flex-1">
                            <p className="text-md font-medium">{transaction.category}</p>
                            <p className="text-sm text-black">{dayjs(transaction.date).format("DD/MM/YYYY")}</p>
                            < p className="text-sm text-black font-semibold">{transaction.description}</p>
                        </div>
                        {/* Importo */}
                        <div className="flex-shrink-0 text-right">
                            <p className={`text-md font-semibold ${transactionTypeStyles(transaction.transactionType)}`}>
                                {transaction.transactionType === 'income' ? '+' : '-'}€{formatCurrency(transaction.amount)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionsList;
