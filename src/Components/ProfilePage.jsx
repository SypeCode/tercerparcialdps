import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { Router, Link } from "@reach/router";

import Info from "./Home/Info";
import Contacto from "./Home/Contacto";
import Ayuda from "./Home/Ayuda";
import Inicio from "./Home/Inicio";
import Planilla from "./Home/Planilla";
import Empleados from "./Home/Empleados";

const ProfilePage = () => {
  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();
    window.location = '/'; 
  };

  return (

    <div>
    
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark float-right w-100">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
          <li class="nav-item font-weight-bold m-3">
              <Link class="nav-link" to="inicio">
                Inicio
              </Link>
            </li>
            <li class="nav-item font-weight-bold m-3">
              <Link to="empleados" class="nav-link">
              Empleados
              </Link>
            </li>
            <li class="nav-item font-weight-bold m-3">
              <Link to="planilla" class="nav-link">
              Planilla
              </Link>
            </li>
            <li class="nav-item font-weight-bold m-3">
              <Link class="nav-link" to="info">
                Info
              </Link>
            </li>
            <li class="nav-item font-weight-bold m-3">
              <Link class="nav-link" to="contacto">
                Contactanos
              </Link>
            </li>
            <li class="nav-item font-weight-bold m-3">
              <Link class="nav-link" to="ayuda">
                Ayuda
              </Link>
            </li>
            <button
              className="btn btn-danger"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
          </ul>
        </div>
      </nav>

      <div className="container shadow-lg ronded p-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
              <div
                style={{
                  background: `url(${
                    photoURL ||
                    "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
                  })  no-repeat center center`,
                  backgroundSize: "cover",
                  height: "100px",
                  width: "100px",
                }}
                className="border border-blue-300"
              ></div></div>
              <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
              <label class="font-weight-bold mt-2">Nombre :</label> <h3 className="italic my-2">{displayName}</h3></div>
              <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
              <label class="font-weight-bold mt-2">Correo :</label> <h3 className="italic my-2">{email}</h3></div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
      <div className="col-md-12"> 
      <Router>
        <Info exact path="info" />
        <Contacto exact path="contacto" />
        <Ayuda exact path="ayuda" />
        <Inicio exact path="inicio" />
        <Empleados exact path="empleados" />
        <Planilla exact path="planilla" />
      </Router>
      </div>
      </div>
        </div>
    </div>
  );
};

export default ProfilePage;
