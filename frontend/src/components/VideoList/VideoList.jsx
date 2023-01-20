import React, { useState } from "react";
// import axios from "axios";
import styled from "styled-components";
import VideoGrid from "../VideoGrid/VideoGrid";
import useAuth from "../../hooks/useAuth";

const FlexBox = styled.ul`
display: flex;
flex-wrap: wrap;`


const VideoList = (props) => {
    const [user, token] = useAuth();
    const [videoId, setVideoId] = useState();

    return (
        // put modal above flexbox, have that video player dependant upon videoId in state
    <FlexBox>
    {props.VideoArray.map(el => <VideoGrid key={videoId} video = {el}/>)}
    </FlexBox>
    )
}

export default VideoList
