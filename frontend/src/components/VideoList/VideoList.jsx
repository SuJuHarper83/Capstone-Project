import React from "react";
// import axios from "axios";
import styled from "styled-components";
import VideoGrid from "../VideoGrid/VideoGrid";

const FlexBox = styled.ul`
display: flex;
flex-wrap: wrap;`


const VideoList = (props) => {
    return (
    <FlexBox>
    {props.VideoArray.map(el => <VideoGrid key={el.id.title} video = {el}/>)}
    </FlexBox>
    )
}

export default VideoList