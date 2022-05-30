import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import check from "../../assets/image/unchecked.svg"
import MyContext from "../../MyContext/MyContext";
export default function CardToday(){
    const [todyHabits, setTodayHabits] = useState([])
    const token = localStorage.getItem("token");
    const [attApi, setAttApi] = useState(false);

    const{user, setUser} = useContext(MyContext);
    
    

    

    useEffect(()=>{
        
        const config ={
            headers:{"Authorization":`Bearer ${token}`}
    
        };
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
        promise.then(response => {
           
            const habit = response.data
            setTodayHabits(habit)
            const totalHabits = response.data.length;
            let checkedHabits = 0;
            response.data.filter(item => {
                
                if(item.done === true){
                    checkedHabits++;
                }

            });
            
            setUser({...user,totalHabits,checkedHabits})
            
        });
        promise.catch(error => console.log(error.response))
    },[attApi])
    
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
                        <img onClick={()=>checked(habit.id, habit.done)} src={check}/>
                    </CheckContainer>                
                </CardContainer>));
        }else{
            <h1>Carregando!!!</h1>
        };
    };
    
    const renderCard = makeCard();
    
    function checked(id, done){
        const config ={
            headers:{"Authorization":`Bearer ${token}`}
        };
        if(!done){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config);
            promise.then(response => {
            console.log(response.data);
            setAttApi(!attApi);
        });
        promise.catch(error => console.log(error.response));
        }else{
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config);
            promise.then(response => {
                console.log(response.data);
                setAttApi(!attApi);
            });
            promise.catch(error => error.response);
        
        }

        
    }
        

 
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