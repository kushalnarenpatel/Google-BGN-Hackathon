import React from "react"
import Avatar from "@mui/material/Avatar";
import styled from "styled-components"

const SidebarRow = ({ src, Icon, title , url}) => {
    return (
        <div onClick={() => window.location.replace(url)}>
            <SidebarRowWrapper>
                {src && <Avatar src={src}/>}
                {Icon && <Icon />}
                <p>{title}</p>
            </SidebarRowWrapper>
        </div>
    )
}
const SidebarRowWrapper = styled.div`
    display: flex;
    background: white;
    opacity: 0.85;
    border-radius: 15px;
    align-items: center;
    margin-top: 5px;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
        border-radius: 10px;
    }
    p{
        margin-left:20px;
        font-weight: 600
    }
    .MuiSvgIcon-root{
        font-size:xx-large;
        color: #FF8C00;
    }`
export default SidebarRow