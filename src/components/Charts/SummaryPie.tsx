import {Pie} from "react-chartjs-2";

export const SummaryPie = ({ data }) => {
    return (
        <Pie data={data} options={{responsive: true}}/>
    );
}