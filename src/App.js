import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import About from "./components/About";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] =useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "osmamaco@outlook.com";
  const password = "UPCskf26";


  function onSearch(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        console.log(":::::",data)
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        } // .then(()=>{})
      });
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  };

  const login=(userData)=>{
    if(userData.username===username && userData.password===password){
      setAccess(true);
      navigate("/home");
    }else{
      alert("Credenciales  incorrectas");
    }
  };


  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form Login = { login } />}/>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;