import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom'
import { useNavigate, Link } from "react-router-dom";
import MoodTracker from "../../components/MoodTracker/MoodTracker";

const ChartPage = () => {

const [user, token] = useAuth();
const [data, setData] = useState([]);
const navigate = useNavigate();
const { mood } = useParams();

useEffect(() => {
    getData();
  }, [token]);

    async function getData(props){
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/capstone/entry${mood}/`, {headers: {Authorization: "Bearer " + token}});
            console.log(response.data.items);
            setData(response.data.items);
        }   catch (error) {
            console.log(error.response.data);
            getData()
        }
    }

    return (
        <>
        <div>
        <MoodTracker parentEntries={data} />
        </div>
        <li><button onClick={() => navigate("/")}>Home</button></li>
        </>
    )
}



export default ChartPage