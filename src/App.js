import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from 'react-router-dom';

import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import About from "./components/About";


function App() {
  const [characters, setCharacters] = useState([]);

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
  }
  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;