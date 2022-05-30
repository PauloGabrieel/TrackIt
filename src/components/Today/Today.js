import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import { useContext } from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import MyContext from "../../MyContext/MyContext";
import Footer from "../shared/Footer";



import CardToday from "./CardToday";
export default function Today(){
    const {user} = useContext(MyContext);
    dayjs.locale('pt-br');
    const now = dayjs();
    
    console.log(user)
    return(
        <Container>
            <Header></Header>
            <TodayContainer>
                <div className="StatusTrackIt">
                    <h2>{`${now.format('dddd').replace("-feira", "")} - ${now.format('DD/MM')}`}</h2>
                    {user.totalHabits === 0 ? <p>Nenhum hábito  concluído ainda</p>: 
                    <p style={{color:"#8FC549"}}> {`${(100*user.checkedHabits)/user.totalHabits}% dos hábitos concluídos`}</p>}
                </div>
                <CardToday></CardToday>
            </TodayContainer>
            <Footer></Footer>            
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    margin: 70px auto;
    width:100%;
    height :100vh;
    
`;

const TodayContainer = styled.div`
    display : flex;
    flex-direction: column;
    padding: 18px;

    h2{
        font: 400 23px "Lexend Deca", sans-serif;
        color: #126BA5;
    };
    p{
        font: 400 18px "Lexend Deca", sans-serif;
        color: #BABABA;
    }

`;