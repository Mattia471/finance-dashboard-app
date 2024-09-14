import React from 'react';
import {Box} from "@mui/material";
import BaseLayout from "../components/BaseLayout.tsx";
import Widget from "../components/Widget.tsx";
import TableComponent from "../components/TableComponent.tsx";
// import dayjs from "dayjs"; // Assicurati di aggiornare il percorso

const Dashboard: React.FC = () => {
    return (
        <BaseLayout>
            <Widget
                title="Entrate nel mese"
                valueToShow={"€ 1.000,00"}
                color="green"
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
                <TableComponent/>
            </Box>
        </BaseLayout>
    );
};

export default Dashboard;
