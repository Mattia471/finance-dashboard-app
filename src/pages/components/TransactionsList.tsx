import {formatCurrency} from "../../utils.tsx";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

const TransactionsList = ({transactions}) => {
    const [transactionsList, setTransactionsList] = useState(transactions);

    useEffect(() => {
        setTransactionsList(transactions);
    }, [transactions]);

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
                        className={`p-4 flex items-start space-x-4 text-gray-900 cursor-pointer hover:bg-gray-50 ${transaction.selected ? 'bg-gray-100' : ''}`}>
                        {/* Icona transazione */}
                        <div className={`w-10 text-center `}>
                            <span className={"text-2xl font-medium"}> {dayjs(transaction.date).format("DD")}</span>
                            <span className={"text-md uppercase"}> {dayjs(transaction.date).format("MMM")}</span>
                        </div>
                        {/* Dettagli transazione */}
                        <div className="flex-1 space-y-1 justify-center">
                            <p className="text-xl font-medium">{transaction.category}</p>
                            <p className="text-sm">{transaction.description}</p>
                        </div>
                        {/* Importo */}
                        <div className="flex-shrink-0 text-right">
                            <p className={`text-xl font-semibold`}>
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
