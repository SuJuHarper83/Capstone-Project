import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
// import axios from "axios";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const Grid = styled.li`
width: 200px;
padding: 1rem;
display: grid;
column-gap: 1px;
content: center;
box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
margin: 1rem;
border-radius: 10px;
font-size: smaller;
`;

const ExerciseGrid = ({exercise}) => {

    const [user, token] = useAuth();

    useEffect(() => {
        ExerciseGrid();
      }, [token]);

    return ( 
        <Grid style={{backgroundColor: `${colorArray[Math.floor(Math.random() * colorArray.length)]}` }}>
            <Link to={`/${exercise.id}`}>
            <button className="exercise-btn">{exercise.title}</button>
            </Link>
        </Grid>
     );

}
 
export default ExerciseGrid;