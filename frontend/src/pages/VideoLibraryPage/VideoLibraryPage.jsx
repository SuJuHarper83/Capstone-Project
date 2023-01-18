import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import VideoList from "../../components/VideoList/VideoList";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

const VideoLibrary = () => {

const [user, token] = useAuth();
const [video, setVideos] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    getVideos();
  }, [token]);

  async function getVideos(){
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/capstone/video/`)
      console.log(response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }

    function handleSubmit(event) {
      event.preventDefault();
      getVideos()
    }
}

    
    return (
        <>
        <div>
        <VideoList VideoArray={video} />
        </div>
        <li><button onClick={() => navigate("/")}>Home</button></li>
        </>
    )

}

export default VideoLibrary