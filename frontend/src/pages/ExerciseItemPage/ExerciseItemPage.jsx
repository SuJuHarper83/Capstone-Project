import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom'
import { useNavigate, Link } from "react-router-dom";

import axios from "axios"

const ExerciseItem = () => {

    const [user, token] = useAuth();
    const [exercise, setExercise] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getExercise();
      }, [token]);

    async function getExercise(){
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/capstone/addExercises/${id}`)
          console.log(response.data.items);
          setExercise(response.data.items);
        } catch (error) {
          console.log(error.response.data);
        }
      }
    
        function handleSubmit(event) {
          event.preventDefault();
          getItem()
        }

    return (
        <div>
            <h5 className="exercise-heading">{exercise.title}</h5>
            <h3 className="item-heading">Description</h3>
            <p>{exercise.input_d}</p>
            <h3 className="item-heading">Examples</h3>
            <p>{exercise.input_e}</p>
            <li><button onClick={() => navigate("/")}>Home</button></li>
        </div>
    )
}
export default ExerciseItem