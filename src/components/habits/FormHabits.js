import axios from "axios";

import {useState} from "react"
import styled from "styled-components";
export default function FormHabits({setShowForm, setControlApi, controlApi}){
    const [days, setDays] = useState([
        {name: "D", clicked: false, id: 0},
        {name: "S", clicked: false, id: 1},
        {name: "T", clicked: false, id: 2},
        {name: "Q", clicked: false, id: 3},
        {name: "Q", clicked: false, id: 4},
        {name: "S", clicked: false, id: 5},
        {name: "S", clicked: false, id: 6}
    ]);
    const [descriptionHabits, setDescriptionHabits] = useState("");
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const token = localStorage.getItem("token");

   
    function sendNewHabits(){
        const config = {
            headers:{"Authorization":`Bearer ${token}`}
        };
        const body = {
            name: descriptionHabits,
	        days: days.filter(item => item.clicked === true).map(item => item.id)
        };
        
        const promise = axios.post(URL,body,config);
        promise.then(response => {
            console.log(response);
            setShowForm(false);
            setControlApi(!controlApi);
        });
        
    };
    function clickedDay(position){
        days.filter(item => item.id === position).map(item => item.clicked= !item.clicked)
        setDays([...days])
        
    } 
    
    return(
        <ContainerForm>
            <input type="text" name="habito" placeholder="Nome do Hábito" value={descriptionHabits} onChange={(e)=>setDescriptionHabits(e.target.value)}/>
            <Weekdays>
                {days.map((item,index)=> (
                <Day 
                onClick={()=>clickedDay(item.id)} 
                key={index}
                clicked={item.clicked}
                >{item.name}</Day>))}
            </Weekdays>
            <ContainerButton>
               <div onClick={()=>setShowForm(false)}>Cancelar</div>
               <div onClick={sendNewHabits}>Salvar</div> 
            </ContainerButton>
        </ContainerForm>
    );
};


const ContainerForm = styled.form`
width: 100%;
height: 180px;
background-color: #FFF;
border-radius: 5px;
display: flex;
flex-direction: column;
padding:20px;
margin-top: 20px;

    input{
        width: 100%;
        height:45px;
        font: 400 20px "Lexend Deca, sans-serif";
        color: ##666666;
        border: 1px solid #D4D4D4;
        padding:5px;
        border-radius:5px;
        outline: 1px;
    };
    input::placeholder{
        color:  #D4D4D4;
        
    };
`;
const Weekdays = styled.div`
    margin-top:8px;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    gap: 4px;

`
const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font: 400 20px "Lexend Deca", sans-serif;
    color: ${props =>props.clicked ?"#FFF" :"#CFCFCF"};
    cursor: pointer;
    background-color: ${props =>props.clicked ? "#CFCFCF":"#FFF" };
`;
const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:4px;
    margin-top: 30px;

    div{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        color : #FFF;
        cursor: pointer;
        font: 400 16px "Lexend Deca", sans-serif;
    
    };

    div:first-child{
        background-color: #FFF;
        color:#52B6FF;
    }
`;