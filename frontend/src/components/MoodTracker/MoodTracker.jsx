import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';

const MoodTracker = (props) => {

    const [user, token] = useAuth();
    const [data, setData] = useState([]);

    useEffect(() => {
        let chartData = props.parentEntries.map(entry => {
            return [entry.date, entry.mood];
        });
        setData(chartData);
    }, [props.parentEntries])

    
    return (
        <Chart
        chartType="LineChart"
        data={[["Date", "Mood"], ...data]}
        width="100%"
        height="400px"
        legendToggle
        options={{legend: {position: "bottom"}}}
        />
    );
}


export default MoodTracker


