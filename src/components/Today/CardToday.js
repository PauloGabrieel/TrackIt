import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components"
import unchecked from "../../assets/image/unchecked.svg"
export default function CardToday(){
    const [todyHabits, setTodayHabits] = useState([])
    const token = localStorage.getItem("token");
    console.log(token)
    

    useEffect(()=>{
        console.log( 'entrou no effect')
        const config ={
            headers:{"Authorization":`Bearer ${token}`}
    
        };
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
        promise.then(response => {
            console.log(response)
            setTodayHabits(response.data)
        });
        promise.catch(error => console.log(error.response))
    },[])
    
    function makeCard(){
        if(todyHabits.length !==0){
            
            return (todyHabits.map(habit => 
                <CardContainer key={habit.id}>
                    <DescriptionContainer>
                        <h3>{habit.name}</h3>
                        <span> Sequência atual: {habit.currentSequence} dias</span>
                        <span> Seu recorde: {habit.highestSequence} dias</span>
                    </DescriptionContainer>
                    <CheckContainer done={habit.done}>
                        <img src={unchecked}/>
                    </CheckContainer>               
                </CardContainer>));
        }else{
            <h1>Carregando!!!</h1>
        };
    };
    
   
    const renderCard = makeCard();
    
    return(
       <>
        {renderCard}
       </>
      
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
    background-color:${props => props.done ?"#8FC549": "#EBEBEB" };
    border-radius: 5px;
    img{
        width: 35px;
        height: 28px;
        cursor: pointer;
    };
    
    `;