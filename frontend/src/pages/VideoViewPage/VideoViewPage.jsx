import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom'
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";


const VideoPage = () => {

    const [user, token] = useAuth();
    const [video, viewVideo] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
      getVideo();
    }, [token]);
  
    async function getVideo(){
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/capstone/video/${id}', {headers: {Authorization: "Bearer " + token}});
        console.log(response.data.items);
        viewVideo(response.data.items);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    const VidPlayer = styled.iframe`
    border-radius: 10px;
    display: block;
    margin: auto;
    `
 
  return ( 
      <> 
        <div className="title-container-b"></div> 
          <div className="player">
          <VidPlayer title="ytplayer"
                  type="text/html"
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
                  frameborder="0"> 
          </VidPlayer>
          </div>
          <div>
          <li><button onClick={() => navigate("video_library")}>Back</button></li>
          </div>
      </>
    );
  }


export default VideoPage;