import { useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-loader-spinner/dist/index"
import{ThreeDots} from "react-loader-spinner"
import MyContext from "../../MyContext/MyContext";

export default function FormLogin(){
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const [email, setEmail] = useState("");;
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();  
    const {setUser} = useContext(MyContext);
    
    
    function login(e){
        e.preventDefault();
        const allFieldFilled =(email.length !== 0 && password.length !== 0);
        const body={
            email,
            password
        };
        if(allFieldFilled){
            setLoading(true);
            setTimeout(()=>{
                setLoading(false)
                const promise = axios.post(URL, body);
                promise.then(response => {
                    localStorage.setItem("token", response.data.token);
                    
                    const {name, id, image} = response.data;
                    setUser({name,id,image})

                    navigate("/hoje");
                });  
                promise.catch((err) => {
                   
                    console.log(err.response)    
                    const error = err.response.data.message;
                    alert(error);
                });
            }, 3000);
            
        }else{
            alert("Todos os campos tem que estar preenchidos!")
            
        };
        
        
    };

    return(
        <FormContainer onSubmit={login}>
            <Input type="email" disabled={loading} name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="email" />
            <Input type="password" disabled={loading} name="senha" onChange={(e)=> setPassword(e.target.value)}placeholder="senha" />
            
            {!loading ? <div className="button" onClick={login}>Entrar</div>:<div className="button" onClick={login}>{<ThreeDots color="#FFF" height={80} width={80} />}</div>}
        
        </FormContainer>
    );
};

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #fff;
        font: 400 20px 'Lexend Deca', sans-serif;
        cursor: pointer;
    };
    div:hover{
        filter: brightness(.7);
    }
`
const Input = styled.input`
        padding: 10px;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font: 400 20px 'Lexend Deca', sans-serif;
        background-color: ${props => props.disabled ? "lightgray": "#fff"};

    &:focus{
        outline-color: #52B6FF;
    }

`;
