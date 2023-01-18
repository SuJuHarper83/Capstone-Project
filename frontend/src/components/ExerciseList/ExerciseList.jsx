import React from "react";
// import axios from "axios";
import styled from "styled-components";
import ExerciseGrid from "../ExerciseGrid/ExerciseGrid";

const FlexBox = styled.ul`
display: flex;
flex-wrap: wrap;`


const ExerciseList = (props) => {
    return (
    <FlexBox>
    {props.ExerciseArray.map(el => <ExerciseGrid key={el.id.title} video = {el}/>)}
    </FlexBox>
    )
}

export default ExerciseList