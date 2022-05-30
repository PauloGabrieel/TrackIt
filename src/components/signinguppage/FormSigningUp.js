import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components"
import "react-loader-spinner/dist/index"
import{ThreeDots} from "react-loader-spinner"


export default function FormSigningUp(){
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const [loading, setLoading] = useState(false); 
    let navigate = useNavigate();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    
   
    
    function handleForm(e){

        setForm({...form,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
        
        
    };
    // {<Audio height="45px" color="white" ariaLabel="loading" />}
    function sendUserData(e){
        e.preventDefault();
        const allFieldsFilled =( form.email.length !== 0 && form.image.length !== 0 && form.name.length !== 0 && form.password.length !== 0);
        
        if(allFieldsFilled){
            setTimeout(()=>{
                const promise = axios.post(URL, form);
                promise.then(response => {
                    console.log(response.data)    
                }
                )
                promise.catch(err => console.log(err.response))
                navigate("/");
            }, 5000);
            setLoading(!loading);
        }else{
            alert("Todos os campos devem ser preenchidos!")
        }
        
        
    };

    
    return(
        <FormContainer onSubmit={sendUserData}>
            <Input type="email" disabled={loading} name="email" onChange={handleForm} value={form.email} placeholder="email" required/>
            <Input type="password" disabled={loading} name="password" onChange={handleForm} value={form.password} placeholder="senha" />
            <Input type="text" disabled={loading} name="name" onChange={handleForm} value={form.name} placeholder="nome" />
            <Input type="text" disabled={loading} name="image" onChange={handleForm} value={form.image} placeholder="foto" />
            {!loading ? <div className="button"onClick={sendUserData} >Entrar </div>: <div className="button" onClick={sendUserData}  ><ThreeDots color="#FFF" height={80} width={80} /></div>}
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