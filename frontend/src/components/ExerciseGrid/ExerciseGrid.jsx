import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const Grid = styled.li`
  width: 80px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 10px;
  font-size: smaller;
`;

const ExerciseGrid = ({ exercise }) => {
  const [user, token] = useAuth();
  const [exerciseId, setExerciseId] = useState();

  useEffect(() => {
    ExerciseGrid();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    ExerciseGrid();
  }

  return (
    <div>
      <Grid
        style={{
          backgroundColor: `${
            colorArray[Math.floor(Math.random() * colorArray.length)]
          }`,
        }}
      >
        <div onClick={() => setExerciseId(exerciseId)}>
          <div>{exercise.title}</div>
        </div>
      </Grid>
    </div>
  );
};

export default ExerciseGrid;
