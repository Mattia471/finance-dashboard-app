import {Home, IcecreamOutlined, LocalHospital, ShoppingBasket} from "@mui/icons-material";
import {formatCurrency} from "../../utils.tsx";
import {useEffect, useState} from "react";

const hobbyIcons = [<Home/>, <ShoppingBasket/>, <IcecreamOutlined/>, <LocalHospital/>];

const CategoryList = ({categories}) => {
    const [categoriesList, setCategoriesList] = useState(categories);

    useEffect(() => {
        setCategoriesList(categories);
    }, [categories]);
    return (
        <div className="bg-white rounded-xl shadow-md overflow-y-scroll w-full max-h-96">
            <ul className="divide-y divide-gray-200">
                {categories.map((transaction, index) => (
                    <li key={index}
                        onClick={() => {
                            const newTransactions = categoriesList.map((t, i) => {
                                if (i === index) {
                                    t.selected = !t.selected;
                                } else {
                                    t.selected = false;
                                }
                                return t;
                            });
                            setCategoriesList(newTransactions);
                        }}
                        className={`p-4 flex items-center space-x-4 text-gray-900 hover:bg-green-600 hover:text-white cursor-pointer ${transaction.selected ? "bg-green-600 text-white" : ""}`}>
                        {/* Icona transazione */}
                        <div
                            className={`flex-shrink-0 rounded-full p-3 bg-blue-50 text-blue-700`}>
                            {hobbyIcons[Math.floor(Math.random() * hobbyIcons.length)]}
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

export default CategoryList;