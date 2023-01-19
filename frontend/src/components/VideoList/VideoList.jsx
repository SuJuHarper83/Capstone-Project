import React from "react";
// import axios from "axios";
import styled from "styled-components";
import VideoGrid from "../VideoGrid/VideoGrid";
import useAuth from "../../hooks/useAuth";

const FlexBox = styled.ul`
display: flex;
flex-wrap: wrap;`

const [user, token] = useAuth();

const VideoList = (props) => {
    return (
    <FlexBox>
    {props.VideoArray.map(el => <VideoGrid key={el.id.title} video = {el}/>)}
    </FlexBox>
    )
}

export default VideoList