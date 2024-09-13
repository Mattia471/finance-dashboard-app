import {Paper, Typography} from '@mui/material';

const Widget = ({title, children}) => {
    return (
        <Paper className="p-4" elevation={3} style={{minHeight: '200px'}}>
            <Typography variant="h6">{title}</Typography>
            <div>{children}</div>
        </Paper>
    );
};

export default Widget;