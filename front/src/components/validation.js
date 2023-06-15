const validation = (userData, errors, setErrors) => {
    //username
    if (!userData.username)
      setErrors((prevErrors) => ({ ...prevErrors, username: "Por favor completa este campo" }));
    else if (userData.username.length > 35)
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "El nombre de usuario no puede tener más de 35 caracteres",
      }));
    else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)
    ) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Email inválido" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  
    //password
    if (userData.password.length < 6 || userData.password.length > 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "La contraseña debe tener entre 6 y 10 caracteres",
      }));
    } else if (!/\d/.test(userData.password)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Debe contener al menos un número" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };
  
  export default validation;
  