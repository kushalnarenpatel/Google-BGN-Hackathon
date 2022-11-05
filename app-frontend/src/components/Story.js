import Avatar from "@mui/material/Avatar";
import React from "react"
import styled from "styled-components"
const Story = ({ image, profileSrc, title , url}) => {
    return (
        <div onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
            <StoryWrapper imageUrl={`${image}`}>
            <Avatar src={profileSrc} className='story__avatar' />
            <h4>{title}</h4>
        </StoryWrapper>
        </div>
        
    )
}

const StoryWrapper = styled.div`
    background-image: url(${props => props.imageUrl ? props.imageUrl : ''});
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 200px;
    box-shadow: 0px 5px 17px -7px rgba(0,0,0,0,.75);
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 100ms ease-in;
    &:hover {
        transform: scale(1.07);
    }
    .story__avatar {
        margin: 10px;
        border: 3px solid #FF8C00;
    }
    h4 {
        position: absolute;
        bottom: 20px;
        left: 20px;

        color: white;
    }
`
export default Story