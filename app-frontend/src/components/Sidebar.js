import React from 'react'
import SidebarRow from './SidebarRow'
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMore,
    Shuffle,
  } from "@mui/icons-material";
import styled from 'styled-components'

var countries = ['United Kingdom','Nigeria','China','India','United States','Somalia','Madagascar','Chile','Spain','Italy','Germany','Ghana','Kenya','Iceland']
function random(arr){
    var index = Math.round(Math.random()*arr.length - 1)
    var item = arr[index];
    return item
}
const Sidebar = () => {
    return (
        <SidebarWrapper>
        {/* <SidebarRow src={user.photoURL} title={user.displayName} url={window.location.href}  /> */}
        {/* Replace globe URL with the url you get when you open globe with live server */}
        <SidebarRow Icon={EmojiFlags} title="Globe" url={`http://127.0.0.1:5500/ex_prac/bgn-hackathon/globe.html`} />
        <SidebarRow Icon={People} title="Friends" url={window.location.href} />
        <SidebarRow Icon={Chat} title="Upload Caption" url={window.location.href}/>
        <SidebarRow Icon={VideoLibrary} title="Upload Image/Video" url={window.location.href}/>
        <SidebarRow Icon={Shuffle} title="Random Country" url={`http://localhost:3000/${random(countries)}`}/>
        <SidebarRow Icon={ExpandMore} title="More" url={window.location.href}/>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9%;
`

export default Sidebar