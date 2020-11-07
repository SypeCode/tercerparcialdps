import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, generateUserDocument } from "../firebase";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event) => {

    event.preventDefault(); // POST , GET , PHP, JAVA , ASP, ETC

    setError("");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    }
    catch (error) {
      setError('Error , Por favor intentar de nuevo : ' + error);
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className="">
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
        </ul>
      </nav>
      <div className="container p-5">
      <div className="border rounded p-5">
        <h2 class="text-center mt-4 mb-4 font-weight-bold">Crear Cuenta</h2>
          {error !== null && (
            <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <form className="mt-3 px-5 pt-4">
            
          <div className="form-group">            
              <input type="text" className="form-control"
                name="displayName"
                placeholder="Ingresar Nombre"
                onChange={(event) => onChangeHandler(event)} />
            </div>       
          <div className="form-group">            
              <input type="email" className="form-control"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Ingresar Correo"
                onChange={(event) => onChangeHandler(event)} />
            </div>      
          <div className="form-group">            
              <input type="password" className="form-control"
                name="userPassword"
                id="userEmail"
                value={password}
                placeholder="Ingresar Contraseña"
                onChange={(event) => onChangeHandler(event)} />
            </div>  
                       
            <button className="btn btn-success mx-0 mt-4 form-control" 
              onClick={event => {
                createUserWithEmailAndPasswordHandler(event);
              }}
            ><i class="fa fa-save"></i>  Guardar
          </button>
          </form>
          <p className="text-center my-3">
            {" "}
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Regresar Login
          </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
