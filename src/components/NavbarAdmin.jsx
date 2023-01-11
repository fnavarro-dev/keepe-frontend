import React from "react";
import { Link } from "react-router-dom";
import "../Assets/css/styleNavbarAdmin.css";
import logoKeepe from "../Assets/IMG/keepelogo.png";
//import "./boton";

const NavbarKeepeComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg colorNavAdmin" id="navbar-example">
      <div class="container">
        <Link to="/" class="navbar-brand">
          <img class="icononav" src={logoKeepe} alt="" />
        </Link>
        <span class="iconotext">Keepe</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mx-lg-auto mx-xs-0 textoNav">
            <li class="nav-item">
              <Link to="/" class="nav-link textoNav" aria-current="page">
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/reserva" class="nav-link textoNav" aria-current="page">
                Reservar
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/registroadmin" class="nav-link textoNav">
                Publicar
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/misionyvision" class="nav-link textoNav">
                Conócenos
              </Link>
            </li>
            <li class="nav-item dropdown dropdownLi">
              <Link
                class="btn btn-circle purple-background nav-link dropdown-toggle textoNav center-icon "
                to="/"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-user-plus h3"></i>
              </Link>
              <ul
                class="dropdown-menu bg-ul"
                aria-labelledby="navbarScrollingDropdown"
                onMouseEnter={(event) => {
                  event.currentTarget.previousElementSibling.classList.add(
                    "hover"
                  );
                }}
              >
                <li>
                  <Link class="dropdown-item iancl" to="/iniciarsesion">
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item iancl" to="/registro">
                    Registrate
                  </Link>
                </li>
                {/* <li>
                <a class="dropdown-item iancl" target="_blank" to="/">
                  Ver Tickets
                </a>
              </li>
              <li>
                <a class="dropdown-item iancl" target="_blank" to="/">
                  Mi Perfil
                </a>
              </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarKeepeComponent;
