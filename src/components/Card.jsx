import "./Card.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorite,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
      localStorage.removeItem(`favorite:${id}`);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
      localStorage.setItem(`favorite:${id}`, "true");
    }
  };

  useEffect(() => {
    const isFavorite = localStorage.getItem(`favorite:${id}`);
    setIsFav(isFavorite === "true");
  }, [id]);

  return (
    <div className="card">
      <div className="face face1">
        <div className="datos">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="face face2">
        <div className="datos">
          <Link to={`/details/:${id}`} className="card-name">
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
          </Link>
          {isFav ? (
            <button onClick={handleFavorite} className="botonLink">❤️</button>
          ) : (
            <button onClick={handleFavorite} className="botonLink">🤍</button>
          )}
          <button className="botonLink" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {myFavorite: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
