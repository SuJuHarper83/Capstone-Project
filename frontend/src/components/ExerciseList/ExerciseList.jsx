import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const VideoGrid = styled.li`
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

const ExerciseList = ({exercise}) => {
    return ( 
        <VideoGrid style={{backgroundColor: `${colorArray[Math.floor(Math.random() * colorArray.length)]}` }}>
            <Link to={`/${}`}>
            <button className="exercise-btn" exercise.title} alt=""/>
            </Link>
        </VideoGrid>
     );

}
 
export default VideoList;