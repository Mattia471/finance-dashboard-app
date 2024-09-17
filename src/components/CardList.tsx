import {CalendarMonth, Home, IcecreamOutlined, LocalHospital, ShoppingBasket} from "@mui/icons-material";
import {formatCurrency} from "../utils.tsx";
import {useEffect, useState} from "react";

const hobbyIcons = [<Home/>, <ShoppingBasket/>, <IcecreamOutlined/>, <LocalHospital/>];

const CardList = ({transactions, type}) => {
    const [transactionsList, setTransactionsList] = useState(transactions);

    useEffect(() => {
        setTransactionsList(transactions);
    }, [transactions]);
    return (
        <div className="bg-white rounded-xl shadow-md overflow-y-scroll w-full max-h-96">
            <ul className="divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
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
                        className={`p-4 flex items-center space-x-4 text-gray-900 hover:bg-green-600 hover:text-white cursor-pointer ${transaction.selected ? "bg-green-600 text-white" : ""}`}>
                        {/* Icona transazione */}
                        <div
                            className={`flex-shrink-0 rounded-full p-3 bg-blue-50 ${type === "category" ? "text-blue-700" : "text-green-700"}`}>
                            {type === "category" ?
                                hobbyIcons[Math.floor(Math.random() * hobbyIcons.length)] : <CalendarMonth/>}
                        </div>
                        {/* Dettagli transazione */}
                        <div className="flex-1">
                            <p className="text-md font-medium">{transaction.category}</p>
                            <p className="text-sm font-semibold">€{formatCurrency(transaction.amount)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CardList;