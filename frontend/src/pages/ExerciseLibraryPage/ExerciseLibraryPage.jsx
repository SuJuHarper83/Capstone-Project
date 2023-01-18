import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const [user, token] = useAuth();
const [exercise, setExercises] = useState([]);

useEffect(() => {
    getExercises();
  }, [token]);

  async function getExercises(){
    try {
      let response = await axios.get(exercise)
      console.log(response.data.items);
      setExercises(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  }

    function handleSubmit(event) {
      event.preventDefault();
      getExercises()
    }

    return (
        <FlexBox>
            {props.ExerciseArry.map(el => <ExerciseList key={el.id.title} video = {el}/>)}
        </FlexBox> 
    )