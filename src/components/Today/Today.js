import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import MyContext from "../../MyContext/MyContext";
import Footer from "../shared/Footer";



import CardToday from "./CardToday";
export default function Today(){
    const {user} = useContext(MyContext);
    const now = dayjs();

    // const promise =

    return(
        <Container>
            <Header></Header>
            <TodayContainer>
                <div className="StatusTrackIt">
                    <h2>{`${now.format('dddd')} - ${now.format('DD/MM')}`}</h2>
                    <p>Nenhum hábito  concluído ainda</p>
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
    width:416px;
    height:100vh;
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