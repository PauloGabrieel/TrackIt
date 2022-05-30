import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/image/logo.svg"
import FormLogin from "./FormLogin";



function LoginPage(){
    
    return(
            <Container>
                <img src={logo} alt="Logo do app" />
                <FormLogin/>
                <Link to="/cadastro">
                    <p>Não tem uma conta? cadastre-se!</p>
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

export default LoginPage;

