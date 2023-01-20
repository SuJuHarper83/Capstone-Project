import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

const JournalEntry = () => {

    const [user, token] = useAuth();
    const [entry, setEntry] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getEntry();
      }, []);

    async function getEntry(){
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/capstone/addEntry/${id}`, {headers: {Authorization: "Bearer " + token}});
          console.log(response.data);
          setEntry(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      }
    
        function handleSubmit(event) {
          event.preventDefault();
          getEntry()
        }

    return (
        <div className="journal-entry-container">
            <h5 className="entry-heading">{entry.title}</h5>
            <h3 className="question-heading">How did you move today?</h3>
            <p>{entry.input_a}</p>
            <h3 className="question-heading">How do you feel?</h3>
            <p>{entry.input_b}</p>
            <h3 className="question-heading">Any other thoughts?</h3>
            <p>{entry.input_c}</p>
            <h3 className="question-heading">What is your mood on a scale of 1-5, 5 being fabulous?</h3>
            <p>{entry.mood}</p>
            <li><button onClick={() => navigate("/")}>Home</button></li>
        </div>
    )

}

export default JournalEntry