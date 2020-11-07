import React, { useState } from "react";
import { auth } from "../firebase";
import { Link } from "@reach/router";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
        </ul>
      </nav>
      <div className="container p-5">
      <div className="border rounded p-5">
        <h2 class="text-center mt-4 mb-4 font-weight-bold">Cambiar Contraseña</h2>
          <form action="" className="mt-3 px-5 pt-4">
            {emailHasBeenSent && (
              <div className="alert alert-success">
                Por favor revisar su correo electronico
              </div>
            )}
            {error !== null && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <div className="form-group">
              <input type="email" className="form-control"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Ingresar Correo"
                onChange={(event) => onChangeHandler(event)} />
            </div>
            <button
              className="btn btn-info mx-0 mt-4 form-control"
              onClick={event => {
                sendResetEmail(event);
              }}
            ><i class="fa fa-save"></i> Guardar
          </button>
          </form>

          <Link
            to="/"
            className="my-2 text-blue-700 hover:text-blue-800 text-center block"
          >
            &larr; Regresar
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
