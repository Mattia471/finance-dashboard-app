import React from 'react';
import {Box} from "@mui/material";
import BaseLayout from "../components/BaseLayout.tsx";
import Widget from "../components/Widget.tsx";
import MonthsList from "./components/MonthsList.tsx";
import TransactionsList from "./components/TransactionsList.tsx";
import MonthBalance from "./components/MonthBalance.tsx";
import {monthsBalanceMock, transactionsMock} from "../mock.ts";


const Dashboard: React.FC = () => {
    return (
        <BaseLayout>
            <Widget
                title="Entrate nel mese"
                valueToShow={"€ 1.000,00"}
                color="blue"
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
                <span className="text-xl font-bold text-gray-900">Dettaglio mensile</span>
                <div className="mt-4">
                    <MonthBalance data={{
                        labels: ['Spese', 'Entrate', 'Investimenti', 'Risparmi'],
                        datasets: [
                            {
                                label: 'Finanze Personali',
                                data: [300, 500, 200, 100],
                                backgroundColor: [
                                    '#FF6384',
                                    '#36A2EB',
                                    '#FFCE56',
                                    '#4BC0C0',
                                ],
                                hoverBackgroundColor: [
                                    '#FF6384AA',
                                    '#36A2EBAA',
                                    '#FFCE56AA',
                                    '#4BC0C0AA',
                                ],
                            },
                        ],
                    }}/>
                </div>
            </Box>
            <Box>
                <span className="text-xl font-bold text-gray-900">Bilanci mensili</span>
                <div className="mt-4">
                    <MonthsList months={monthsBalanceMock}/>
                </div>
            </Box>
            <Box>
                <span className="text-xl font-bold text-gray-900">Transazioni mensili</span>
                <div className="mt-4">
                    <TransactionsList transactions={transactionsMock}/>
                </div>
            </Box>
        </BaseLayout>
    );
};

export default Dashboard;
