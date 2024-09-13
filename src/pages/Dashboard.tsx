import React from 'react';
import {Box} from "@mui/material";
import BaseLayout from "../components/BaseLayout.tsx";
import Widget from "../components/Widget.tsx";
import TableComponent from "../components/TableComponent.tsx";
import dayjs from "dayjs"; // Assicurati di aggiornare il percorso
import {SummaryPie} from "../components/Charts/SummaryPie.tsx";
import {MonthsBar} from "../components/Charts/MonthsBar.tsx";
import {barData, pieData} from "../components/Charts/mock.ts";

const Dashboard: React.FC = () => {
    return (
        <BaseLayout>
            <Widget title="Entrate/Uscite">
                <span>{dayjs().format("MMMM")}</span>
                <SummaryPie data={pieData}/>
            </Widget>
            <Widget title="Widget 2">
                <span>Contenuto del widget 2</span>
                <MonthsBar data={barData}/>
            </Widget>
            <Widget title="Widget 3">
                <span>Contenuto del widget 3</span>
            </Widget>
            <Box>
                <TableComponent/>
            </Box>
            <Widget title="Widget 4">
                <span>Contenuto del widget 4</span>
            </Widget>
        </BaseLayout>
    );
};

export default Dashboard;
