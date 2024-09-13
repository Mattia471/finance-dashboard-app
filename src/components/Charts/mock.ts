export const pieData = {
    labels: ['Entrate', 'Uscite'],
    datasets: [
        {
            data: ["1653.45", "1234.56"],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)'
            ],
            borderWidth: 1,
        },
    ],
};

export const barData = {
    labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    datasets: [
        //i want show two data for each label
        {
            label: 'Entrate',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132)',
            borderWidth: 1,
        },
        {
            label: 'Uscite',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgba(54, 162, 235)',
            borderWidth: 1,
        }
    ],
};