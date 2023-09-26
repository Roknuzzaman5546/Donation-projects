import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Statistics = () => {

    const [myDonat, setMydonat] = useState(0);

    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('job-application'));
        if (storedItem !== null) {
            setMydonat(storedItem.length);
        }
    }, [])

    const data = [
        { label: 'My Donation', value: myDonat, color: '#00C49F' },
        { label: 'Total Donation', value: 12 - myDonat, color: 'red' },
    ];

    const sizing = {
        margin: { right: 10 },
        width: 900,
        height: 800
    };

    return (
        <PieChart
            series={[
                {
                    outerRadius: 150,
                    data,
                    arcLabel: (params) => `${((params.value / 12) * 100).toFixed(1)}%`
                },
            ]}
            legend={{
                direction: "col",
                position: {
                  vertical: "middle",
                  horizontal: "middle"
                }
              }}
              sx={{
                "--ChartsLegend-rootOffsetX": "0px",
                "--ChartsLegend-rootOffsetY": "200px",
              }}
            {...sizing}
        />
    )
};

export default Statistics;