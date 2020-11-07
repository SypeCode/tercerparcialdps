import React, { useState } from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const signInWithEmailAndPasswordHandler = (event) => {

    event.preventDefault(); //DOM -> POST , GET -> PHP , JAVA , ASP , ETC
   
    console.log(" SignIn - signInWithEmailAndPasswordHandler ");
    const user= auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error, por favor revisar credenciales -> " + error);
        console.error("Error signing in with password and email ", error);
      });
      console.log(" SignIn - signInWithEmailAndPassword ");  
      console.log(" const user :  " + user);      
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
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
        <h2 class="text-center mt-4 mb-4 font-weight-bold">Iniciar Sesión</h2>
          <form class="mt-3 px-5 pt-4">
            {error !== null && (
              <div className="py-4 bg-danger w-100 text-white text-center mb-3">
                {error}
              </div>
            )}
            <div className="form-group">
              <input type="email" className="form-control"
                name="userEmail"
                placeholder="Ingresar email"
                onChange={(event) => onChangeHandler(event)} />
            </div>

            <div className="form-group">
              <input type="password" className="form-control"
                name="userPassword"
                placeholder="Ingresar password"
                onChange={(event) => onChangeHandler(event)} />
            </div>

            <button type="submit" className="btn btn-success mx-0 mt-4 form-control"
              onClick={(event) => { signInWithEmailAndPasswordHandler(event) }}
            ><i className="fa fa-lock"></i>Ingresar</button>
            <p className="text-center mt-3">
              {" "}
              <Link to="signUp" className="text-primary">
                No tiene cuenta ?
          </Link>{" "}
              <br />{" "}
              <Link to="passwordReset" className="text-primary">
                Olvido la contraseña ?
          </Link>
            </p>
          </form>
          <div class="px-5">
          <button className="btn btn-info mx-0 mt-4 form-control"
            onClick={() => { signInWithGoogle(); }}
          ><i className="fa fa-google"></i>  Ingresar con Google
          </button>  
          </div> 
        </div>   
      </div>
    </div>
  );
};

export default SignIn;
