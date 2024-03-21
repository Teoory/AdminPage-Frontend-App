import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
Chart.defaults.scale.category = true;

const HomePage = () => {
    const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    const randomData2 = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

    const barChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Visitors',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: randomData,
            },
            {
                label: 'Sales',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: randomData2,
            },
        ],
    };

    const doughnutChartData = {
        labels: ['Desktop', 'Mobile', 'Tablet' , 'Other'],
        datasets: [
            {
                data: [300, 50, 100, 200],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#36eb5d'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#36eb5d'],
            },
        ],
    };

    const doughnutChartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 1.5,
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className='home-page'>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
            <h2>Statistics</h2>
            <div className="charts">
                <div className="chart-container">
                <Bar data={barChartData} options={options} />
                </div>
                <div className="doughnut-chart-container">
                <Doughnut data={doughnutChartData}  options={doughnutChartOptions} />
                </div>
            </div>
            <div className="table-container">
                <h2>Table Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Visitors</th>
                            <th>Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {barChartData.labels.map((day, index) => (
                            <tr key={index}>
                                <td>{day}</td>
                                <td>{barChartData.datasets[0].data[index]}</td>
                                <td>{barChartData.datasets[1].data[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage