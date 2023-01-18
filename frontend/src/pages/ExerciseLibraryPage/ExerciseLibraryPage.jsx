import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import AddExerciseForm from "../../components/AddExercise/AddExercise";

import axios from "axios";

const ExerciseLibrary = () => {

const [user, token] = useAuth();
const [exercise, setExercises] = useState([]);

useEffect(() => {
    getExercises();
  }, [token]);

  async function getExercises(){
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/capstone/addExercises/')
      console.log(response.data.items);
      setExercises(response.data.items);
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
        </>
    )

}

export default ExerciseLibrary