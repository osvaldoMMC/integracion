import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./Favorites.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);


  return (
    <>
      {favorites.map((element, index) => (
        <div className="favoritos">
        <Card
        key={index}
        id={element.id}
        name={element.name}
        status={element.status}
        species={element.species}
        gender={element.gender}
        origin={element.origin.name}
        image={element.image}
        />
        </div>
      ))}
    </>
  );
};

export default Favorites;
