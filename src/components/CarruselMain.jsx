import React from "react";
import "../Assets/css/styleCarruselMain.css";
import imgRecinto5 from "../Assets/IMG/imgRecinto5.jpg";
import imgRecinto8 from "../Assets/IMG/imgRecinto8.jpg";
import imgRecinto9 from "../Assets/IMG/imgRecinto9.jpg";
import logoCampana from "../Assets/IMG/logoCampana.png";
import logoUsuario from "../Assets/IMG/logoUsuario.png";

const CarruselMainComponent = () => {
  return (
    <div
      id="maincarrusel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel carousel-inner">
        <div class="carousel-item active">
          <img src={imgRecinto5} class="d-block w-100" alt="imagenrecinto5" />
        </div>
        <div class="carousel-item">
          <img src={imgRecinto9} class="d-block w-100" alt="imagenrecinto9" />
        </div>
        <div class="carousel-item">
          <img src={imgRecinto8} class="d-block w-100" alt="imagenrecinto8" />
        </div>
        <div class="overlay">
          <div class="container text-center">
            <div class="row px-2">
              <div class="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                <h1 class="titulo1">
                  TU
                  <span class="img-logo-cliente">
                    <img src={logoCampana} alt="logo campana" />
                  </span>
                </h1>
                <div class="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                  <h1 class="titulo2">RESERVA</h1>
                </div>
                <div class="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                  <h1 class="titulo3">PERFECTA</h1>
                </div>
                <p class="texto-info col-sm-12 col-12 ">
                  Con <strong>Keepe</strong> podrás reservar tu recinto
                  <strong> FAVORITO</strong>
                </p>
                <p class="texto-info2 col-sm-12 col-12 ">
                  en donde quieras y revisar los mejores precios.
                </p>
                  <a href="/reserva">
                <button  class="boton-reservar" type="btn">
                  <span class="boton-reservar-texto">Reserva aquí</span>
                </button>
                  </a>
              </div>
              <div class="container col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                <div class="row">
                  <button class="boton-admin" type="btn">
                    <span>
                      <img src={logoUsuario} alt="logo usuario" />
                    </span>
                    <a href="/registroadmin">
                      
                    <span class="boton-admin-texto">
                      Soy Administrador o propietario de un recinto, necesito
                      información para unirme a <strong>Keepe</strong>
                    </span>
                 
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarruselMainComponent;
