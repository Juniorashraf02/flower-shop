import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';


function Dashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json').then(response => response.json().then(data => setData(data)))
    }, []);

    return (
            <div className="responsive-chart md:flex container mx-auto p-8">
                <div>
                    <h1 className="text-3xl font-medium mb-5">Investment Vs Revenue</h1>
                <AreaChart width={495} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey={"month"} />
                        <YAxis />
                        <CartesianGrid strokeDasharray=" 3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        <Area type="monotone" dataKey="sell" stroke="#F00FAC" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div>
                    <h1 className="text-3xl font-medium mb-5">Monthly Wise Sell</h1>
                    <BarChart width={495} height={280} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                        <Bar dataKey="sell" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
    );

}


    
    


export default Dashboard;