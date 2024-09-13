import React from 'react';
import {Box} from "@mui/material";
import BaseLayout from "../components/BaseLayout.tsx";
import Widget from "../components/Widget.tsx";
import TableComponent from "../components/TableComponent.tsx"; // Assicurati di aggiornare il percorso

const Dashboard: React.FC = () => {
    return (
        <BaseLayout>
            <Widget title="Widget 1">
                <span>Contenuto del widget 1</span>
            </Widget>
            <Widget title="Widget 2">
                <span>Contenuto del widget 2</span>
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
