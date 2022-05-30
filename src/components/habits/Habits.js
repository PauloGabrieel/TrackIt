import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import FormHabits from "./FormHabits";
import CardHabits from "./CardHabits";
import MyContext from "../../MyContext/MyContext";
export default function Habits(){
    const [controlApi, setControlApi]= useState(false)
    const [showForm, setShowForm] = useState(false)
    const {setHabits, habits} = useContext(MyContext);
    const token = localStorage.getItem("token");
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
    useEffect(()=>{
        const config = {
            headers:{"Authorization":`Bearer ${token}`}
        };
        const promise = axios.get(URL,config);
        promise.then(response => setHabits(response.data)); 
        

    },[controlApi])
   
    function makeForm(){
        if(!showForm){
            return "";
        }else{
            return <FormHabits setShowForm={setShowForm} setControlApi={setControlApi} controlApi={controlApi}></FormHabits>
        };
    };
    const renderForm = makeForm();
    function requetsHabits(){
        if(habits.length === 0){
            return  <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>;
        }else{
           return <CardHabits controlApi={controlApi} setControlApi={setControlApi}  ></CardHabits>
            
        };
    };
    const renderHabits = requetsHabits();
    return(
        
            <Container>
                <Header></Header>
                <HabitsContainer>
                    <Title>
                        <h2>Hábitos</h2>
                        <Button onClick={()=>setShowForm(!showForm)}>+</Button>
        
                    </Title>
                    <div>
                        {renderForm}
                        {renderHabits}
                    </div>
                </HabitsContainer>
                <Footer></Footer>
            </Container>
            
        
        
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    margin: 70px auto;

    height:100vh;
`;


const HabitsContainer = styled.div`
    display : flex;
   
    flex-direction: column;
    padding:18px;
    
    p{
        font: 400 18px "Lexend Deca", sans-serif;
        color: #666666;
    }

`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h2{
        font: 400 23px "Lexend Deca", sans-serif;
        color: #126BA5;
    };

`
const Button =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 5px;
background-color: #52B6FF;
color: #FFF;
font: 400 25px "Lexend Deca", sans-serif;
cursor: pointer;
`
 

