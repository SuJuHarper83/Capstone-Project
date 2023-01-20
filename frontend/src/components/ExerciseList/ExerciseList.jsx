import React, { useEffect, useState } from "react";
// import axios from "axios";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import ExerciseGrid from "../ExerciseGrid/ExerciseGrid";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ExerciseList = (props) => {
  const [user, token] = useAuth();
  const [exerciseId, setExerciseId] = useState();

  useEffect(() => {
    ExerciseList();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    ExerciseList();
  }

  return (
    <FlexBox>
      {props.ExerciseArray.map((el) => (
        <ExerciseGrid key={exerciseId} exercise={el} />
      ))}
    </FlexBox>
  );
};

export default ExerciseList;
