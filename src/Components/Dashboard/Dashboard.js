import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


function Dashboard() {
    const myData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
            <div className="md:flex container mx-auto">
                <div>
                    <h1 className="text-3xl font-medium mb-5">Investment Vs Revenue</h1>
                <AreaChart width={495} height={250} data={myData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
                    <BarChart width={495} height={280} data={myData} >
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