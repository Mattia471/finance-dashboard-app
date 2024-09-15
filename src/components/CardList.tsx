import {IcecreamOutlined} from "@mui/icons-material";
import {formatCurrency} from "../utils.tsx";

const CardList = ({transactions}) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-y-scroll w-full max-h-96">
            <ul className="divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                    <li key={index} className="p-4 flex items-center space-x-4">
                        {/* Icona transazione */}
                        <div
                            className={`flex-shrink-0 text-blue-700 rounded-full p-3 bg-blue-200`}>
                            <IcecreamOutlined/>
                        </div>
                        {/* Dettagli transazione */}
                        <div className="flex-1">
                            <p className="text-md font-medium text-gray-900">{transaction.category}</p>
                            <p className="text-sm font-semibold text-gray-800">€{formatCurrency(transaction.amount)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CardList;