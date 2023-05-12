import "./Form.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import validation from "./validation";

const Form = ({ Login }) => {

    const [userData, setUserData]=useState({
        username:"",
        password:"",
    });

    const [errors, setErrors] = useState({
        username:"",
        password:"",
    });
     

    const handleInputChange =(event) =>{
        const property = event.target.name;
        const value= event.target.value;

        setUserData({...userData,[property]: value})
        validation({ ...userData, [property]:value}, errors, setErrors);
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        Login(userData);
    };


  return (
    <div className="contenedor">
      <form onSubmit={submitHandler}>
        <div className="username">
        <label htmlFor="username" className="texto">Email:</label>
        <input type="text" className="input" name="username" value={userData.username} onChange={handleInputChange} />
        <p className="error">{errors.username}</p>
        </div>
        <div>
        <label htmlFor="password" className="texto">Password:</label>
        <input type="password" className="input" name="password" value={userData.password} onChange={handleInputChange} />
        <p className="error">{errors.password}</p>
        </div>
        <div>
          <button type="submit" className="botonBuscar">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
