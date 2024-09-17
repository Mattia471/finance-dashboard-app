import {Doughnut} from "react-chartjs-2";
import {useEffect, useState} from "react";
import {IcecreamOutlined} from "@mui/icons-material";
import {formatCurrency} from "../../utils.tsx";

const categoriesData = [
    {
        category: "Casa",
        amount: 200
    },
    {
        category: "Cibo",
        amount: 150
    },
    {
        category: "Svago",
        amount: 100
    },
    {
        category: "Trasporti",
        amount: 50
    },
    {
        category: "Salute",
        amount: 50
    },
    {
        category: "Abbigliamento",
        amount: 50
    },
    {
        category: "Altro",
        amount: 50
    }
]


const MonthBalance = ({data}) => {
    const [balanceData, setBalanceData] = useState(data);

    useEffect(() => {
        setBalanceData(data);
    }, [data]);
    return (
        <div className="bg-white rounded-xl shadow-md w-full h-96 flex flex-col md:flex-row">
            {/* Grafico a ciambella */}
            <div className="items-center justify-center my-4 md:w-1/3">
                    <Doughnut data={balanceData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom'
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (tooltipItem) {
                                        return ` ${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                    }
                                }
                            },
                        }
                    }}/>
            </div>

            {/* Lista delle categorie */}
            <ul className="divide-y divide-gray-200 overflow-y-auto md:w-2/3 m-4">
                {categoriesData.map((transaction, index) => (
                    <li key={index}
                        className="p-4 flex items-center space-x-4 text-gray-900">
                        {/* Icona transazione */}
                        <div className="flex-shrink-0 rounded-full p-3 bg-blue-50 text-blue-700">
                            <IcecreamOutlined/>
                        </div>
                        {/* Dettagli transazione */}
                        <div className="flex-1">
                            <p className="text-sm font-medium">{transaction.category}</p>
                            <p className="text-xs font-semibold">€{formatCurrency(transaction.amount)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default MonthBalance;