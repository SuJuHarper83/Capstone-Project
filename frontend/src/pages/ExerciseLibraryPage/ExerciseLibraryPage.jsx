import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const [user, token] = useAuth();
const [videos, setVideos] = useState([]);

useEffect(() => {
    getVideos();
  }, [token]);

  async function getVideos(){
    try {
      let response = await axios.get(videos)
      console.log(response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  }

    function handleSubmit(event) {
      event.preventDefault();
      getVideos()
    }

    return (
        <FlexBox>
            {props.ExerciseArry.map(el => <ExerciseList key={el.id.title} video = {el}/>)}
        </FlexBox> 
    )