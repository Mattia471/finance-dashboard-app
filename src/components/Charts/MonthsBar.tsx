import {Bar} from "react-chartjs-2";

export const MonthsBar = ({ data }) => {
    return (
        <Bar data={data} options={{
            responsive: true,
            indexAxis: 'y' as const,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem: any) {
                            return ` ${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }}/>
    );
}