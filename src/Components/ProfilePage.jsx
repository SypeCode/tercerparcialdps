import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { Router, Link } from "@reach/router";

import Info from "./Home/Info";
import Contacto from "./Home/Contacto";
import Help from "./Home/Help";
import User from "./Home/User";

const ProfilePage = () => {
  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();
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
            <li class="active nav-item font-weight-bold m-3">
              <Link to="/" class="nav-link">Inicio</Link>
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
              <Link class="nav-link" to="user">
                User
              </Link>
            </li>
            <li class="nav-item font-weight-bold m-3">
              <Link class="nav-link" to="help">
                Help
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

      <Router>
        <Info exact path="info" />
        <Contacto exact path="contacto" />
        <Help exact path="help" />
        <User exact path="user" />
      </Router>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="float-right">
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
              ></div>
              <br></br>
              Nombre : <h2 className="text-2xl font-semibold">{displayName}</h2>
              <br></br>
              Correo: <h3 className="italic">{email}</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
