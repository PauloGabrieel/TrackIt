import axios from "axios";

import styled from "styled-components"
import unchecked from "../../assets/image/unchecked.svg"
export default function(){
    const token = localStorage.getItem("token");
    console.log("carregou")
    const config ={
        headers:{"Authorization":`Bearer ${token}`}

    };
    
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
    promise.then(response => console.log(response));
    promise.catch(error => console.log(error.response))
    
    return(
        <CardContainer>
            <DescriptionContainer>
                <h3>Ler 1 capítulo de livro</h3>
                <span>Sequência atual: 3 dias</span>
                <span>eu recorde: 5 dias</span>
            </DescriptionContainer>
            <CheckContainer>
                <img src={unchecked}/>
            </CheckContainer>
        </CardContainer>
    );
};


const CardContainer = styled.div`
    width: 100%;
    height: 94px;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding:20px;
    margin-top: 20px;
    
    `;

    const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    h3{
        font: 400 20px "Lexend Deca", sans-serif;
        color: #666666;
        margin-bottom: 5px;
    };
    span{
        font: 400 13px "Lexend Deca", sans-serif;
        color: #666666;
    };
    `
    const CheckContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px/;
    background-color:#EBEBEB;
    border-radius: 5px;
    img{
        width: 35px;
        height: 28px;
        cursor: pointer;
    };
    
    `;