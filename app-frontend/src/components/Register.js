import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
//import {auth, provider } from '../firebase'

const Register = () => { 
    const RegisterIn = () => {
        //auth.signInWithPopup(provider)
        (result => console.log(result))
        .catch(error => alert(error.message))
    }
    return (
        <RegisterWrapper>
            <div className= "Register_logo">
            </div>
            <Button type = 'submit' className="register__btn"
            onClick= {RegisterIn}>Register</Button>
        </RegisterWrapper>  
    
    );
    
    
}   

const RegisterWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    .login__logo {
    display: flex;
    flex-direction: column;
    img {
    object-fit: contain;
    height: 150px;
    max-width: 200px;
        }
    }
.register__btn{
    width: 300px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-weight: 800;
    &:hover {
    background-color: white;
    color: #2e81f4;
        }
}
`

export default Register
