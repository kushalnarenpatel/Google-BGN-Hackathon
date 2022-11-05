import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widget'
import React, { Component } from 'react';
import { useState } from 'react'
import Login from './components/Login'
// import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { Axios } from 'axios';

function App() {
  //const [user, setUser] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  return (
    
    <div>
    <AppWrapper> 
    {user ? (
    
    <div>
    <Header />
    <div className="app__body">
    <Sidebar />
    {/* <Widget /> */}
    <Feed />

    </div>
    
    /</div>
    ) : (
      <>
      <Login />
      </>
    )}
    </AppWrapper>
    
  </div>

);

}

const AppWrapper = styled.div`
background: rgb(227,53,19);
background: linear-gradient(90deg, rgba(227,53,19,1) 0%, rgba(249,120,0,1) 45%, rgba(255,166,0,1) 96%);

.app__body {
  display: flex;
}
`

export default App;
