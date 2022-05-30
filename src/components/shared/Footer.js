import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from "react";
import MyContext from "../../MyContext/MyContext";
export default function Footer(){
    const {user} = useContext(MyContext);
    // const [percentage,setpercentage] = useState(0)
    console.log(user);
    const percentage = user.totalHabits === 0 ? 0 : (100 * user.checkedHabits)/user.totalHabits;
  
    return(
        <FooterContainer>
            <Link to="/habitos">
                <div>Hábitos</div>
            </Link>
            <Link to="/hoje">
                <div style={{width:90, height:90}}>
                    <CircularProgressbar 
                    value={percentage} 
                    text={"Hoje"} 
                    background={true}
                    backgroundPadding={5} 
                    styles={buildStyles({
                        pathColor: "#FFF",
                        trailColor: "transparent",
                        backgroundColor : "#52B6FF",
                        textColor: "#FFF"
                    })} />
                </div>
            </Link>
            
            <Link to="/historico">
                <div>Historico</div>
            </Link>
                
        </FooterContainer>
    );
};


const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    height:70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 30px;
   
    div{
        font:400 18px 'Lexend Deca', sans-serif;
        color: #52B6FF;
    };
    a{ 
    text-decoration : none;
    };
    
        
`;
