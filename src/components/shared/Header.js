import styled from "styled-components";
import { useContext } from "react";
import MyContext from "../../MyContext/MyContext";
export default function Headers(){
    const {user} = useContext(MyContext);
   
    return(
        <HeaderContainer>
            <h2>TrackIt</h2>
            <img src={user.image} alt=""/>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    z-index: 1;
    position: fixed;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#126BA5;
    width:100%;
    height: 70px;
    padding: 0 10px;
    box-shadow: 0 3px 3px rgba(0,0 ,0 ,0.4);
    h2{
        font: 400 40px 'Playball', cursive;
        color:#FFF;
    };
    img{
        height: 51px;
        width: 51px;
        border-radius: 50%;
    }
`;