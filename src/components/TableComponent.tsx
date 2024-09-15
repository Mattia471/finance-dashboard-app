import dayjs from "dayjs";
import {formatCurrency} from "../utils.tsx";
import {useState} from "react";

export type DataRow = {
    category: string;
    amount: number;
    date: string;
    description: string;
    transactionType: 'income' | 'expense';
};

const TableComponent = ({rows}: { rows: DataRow[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;

    // Calcola l'indice di inizio e di fine per la paginazione
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Mostra solo le righe della pagina corrente
    const paginatedRows = rows.slice(startIndex, endIndex);

    // Numero totale di pagine
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    // Funzione per gestire il cambio pagina
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

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
                {paginatedRows.map((row) => (
                    <tr key={row.category}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(row.amount)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{dayjs(row.date).format('DD/MM/YYYY')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Paginazione numerica */}
            <div className="flex justify-start items-end space-x-2 mt-4">
                {Array.from({length: totalPages}, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                            currentPage === i + 1 ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-600"
                        } hover:bg-gray-300 transition-colors duration-200`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TableComponent;