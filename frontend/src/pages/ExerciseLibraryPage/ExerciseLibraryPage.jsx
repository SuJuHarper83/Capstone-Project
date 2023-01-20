import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import AddExerciseForm from "../../components/AddExercise/AddExercise";

import axios from "axios";

const ExerciseLibrary = () => {
  const [user, token] = useAuth();
  const [exercise, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getExercises();
  }, []);

  async function getExercises() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/capstone/getExercises/`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      getExercises()
    }
  }

  return (
    <>
      <div>
        <AddExerciseForm addExerciseProperty={exercise} />
      </div>
      <div>
        <ExerciseList ExerciseArray={exercise} />
      </div>
      <li>
        <button onClick={() => navigate("/")}>Home</button>
      </li>
    </>
  );
};

export default ExerciseLibrary
