

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";
import "react-loader-spinner/dist/index"

import "../assets/css/reset.css";
import "../assets/css/style.css";

import Historic from "./historic/Historic";
import SigningUpPage from "./signinguppage/SigningUpPage";
import LoginPage from "./loginpage/LoginPage";
import Habits from "./habits/Habits";
import MyContext from "../MyContext/MyContext";
import Today from "./Today/Today";
function App(){
   
    const [user, setUser] = useState({});
    const [habits, setHabits] = useState([]);
    const [days, setDays] = useState([
        {name: "D", clicked: false, id: 1},
        {name: "S", clicked: false, id: 2},
        {name: "T", clicked: false, id: 3},
        {name: "Q", clicked: false, id: 4},
        {name: "Q", clicked: false, id: 5},
        {name: "S", clicked: false, id: 6},
        {name: "S", clicked: false, id: 7}
    ]);
    return(
        <MyContext.Provider value={{user,setUser, habits, setHabits, days, setDays}}>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<SigningUpPage />}></Route>
                    <Route path="/habitos" element={<Habits />}></Route>
                    <Route path="/hoje" element={<Today />}></Route>
                    <Route path="/historico" element={<Historic />}></Route>
                </Routes>
            
            </BrowserRouter>
        </MyContext.Provider>
    );
};

export default App;