import React, { useEffect, useState } from 'react';
import Chart1 from '../charts/Chart1';
import Chart2 from '../charts/Chart2';
import Chart3 from '../charts/Chart3';
import Chart4 from '../charts/Chart4';
import './Dashboard.css'

const Dashboard = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    console.log(chartData)

    return (
        <div className="charts">
            <Chart1 chartData={chartData}></Chart1>
            <Chart2 chartData={chartData}></Chart2>
            <Chart3 chartData={chartData}></Chart3>
            <Chart4 chartData={chartData}></Chart4>

        </div>
    );
};

export default Dashboard;