import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/image/logo.svg"
import FormSigningUp from "./FormSigningUp";


function SigningUpPage(){
    return(
            <Container>
                <img src={logo} alt="Logo do app" />
               <FormSigningUp></FormSigningUp>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </Container>
        );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        margin-top: 68px;
    };
    a{
        text-decoration-color: #52B6FF;

    }
    p{
        margin-top: 25px;
        font:400 13px 'Lexend Deca', sans-serif;
        color: #52B6FF;
    }
`;

export default SigningUpPage;

