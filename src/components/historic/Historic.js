import styled from "styled-components";
import Header from "../shared/Header"
import Footer from "../shared/Footer";
export default function Historic(){
    return(
        <Container>
            <Header></Header>
            <HistoricContainer>
                <Title>
                    <h2>Histórico</h2>
                    
                </Title>
                <div>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </div>
                
            </HistoricContainer>
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
    height: 100vh;
   
`;
const HistoricContainer = styled.div`
    display : flex;
    flex-direction: column;
    padding:18px;
    
    p{
        font: 400 18px "Lexend Deca", sans-serif;
        color: #666666;
    }

`
const Title = styled.div`
    margin-bottom: 20px;
    h2{
        font: 400 23px "Lexend Deca", sans-serif;
        color: #126BA5;
    };
`
