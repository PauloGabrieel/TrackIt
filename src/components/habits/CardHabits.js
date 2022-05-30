import styled from "styled-components";
import axios from "axios";
import { useContext,useState } from "react";

import trash from "../../assets/image/trash-outline.svg"
import MyContext from "../../MyContext/MyContext";

export default function CardHabits({setControlApi, controlApi}){
    const {habits} = useContext(MyContext);
    const token = localStorage.getItem("token");
    const [weekday, setWeekday] = useState([
        {name: "D",  id: 1, clicked: false},
        {name: "S",  id: 2, clicked: false},
        {name: "T",  id: 3, clicked: false},
        {name: "Q",  id: 4, clicked: false},
        {name: "Q",  id: 5, clicked: false},
        {name: "S",  id: 6, clicked: false},
        {name: "S",  id: 7, clicked: false}
    ]);
    
    function removeHabit(id, nameHabit){
        const deletHabit = window.confirm(`Deseja excluir o hábito ${nameHabit}`);
       
        if(deletHabit){
            const config ={
                headers:{"Authorization":`Bearer ${token}`}
            }
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then( response => console.log(response))
            setControlApi(!controlApi);
        };
    };
        return(
            <>
            {habits.map((item, index) => <CardContainer key={index}>
                <p>{item.name}</p>
                <Weekdays>
                    {weekday.map(day => <Day 
                    clicked={item.days.some(i => i=== day.id)} 
                    key={day.id}>{day.name}</Day>)}
                </Weekdays>
                <img onClick={()=>removeHabit(item.id, item.name)} src={trash} alt="lixeira"/>
            </CardContainer>)}
        </>
    )
};


const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 91px;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding:20px;
    margin-top: 20px;
    img{
        position: absolute;
        right: 10px;
        top:10px;
        width: 14px;
        height: 14px;
        cursor: pointer;
    };
`
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
    background-color: ${props =>props.clicked ?"#CFCFCF":"#FFF" }
        
        
    }};
`;