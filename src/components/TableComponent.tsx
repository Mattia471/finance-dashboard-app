import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';

const TableComponent: React.FC = () => {
    return (
        <Paper elevation={3}>
            <TableContainer component={Paper} className="p-4">
                <Typography variant="h6" className="mb-2">Table Title</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Header 1</TableCell>
                            <TableCell>Header 2</TableCell>
                            <TableCell>Header 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Data 1</TableCell>
                            <TableCell>Data 2</TableCell>
                            <TableCell>Data 3</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default TableComponent;