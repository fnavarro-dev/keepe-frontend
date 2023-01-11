import React from "react";
import "../Assets/css/styleFooter.css";
import logoKeepe from "../Assets/IMG/keepelogo.png";

const FooterComponent = () => {
  return (
    <div id="footer" class="pd-3 pt-4">
      {/*SOCIAL MEDIA */}
      <section>
        <div
          id="social-media-footer1"
          class="container-fluid d-flex justify-content-center"
        >
          <span>
            <i class=" icon fa-brands fa-facebook"></i>
          </span>
          <span>
            <i class="icon fa-brands fa-instagram"></i>
          </span>
          <span>
            <i class="icon fa-brands fa-twitter"></i>
          </span>
        </div>
      </section>
      <hr></hr>

      {/*SOCIAL MEDIA */}
      <div class="container-fluid d-flex justify-content-center">
        <div class="row ">
          <div id="footer-seccion2" class="col-12 col-md3">
            <ul class="lista1 list-unstyled">Inicio</ul>
          </div>
          <div
            id="footer-seccion3"
            class="col-12 col-md3 d-flex aling-items-center justify-content-center"
          >
            <ul class="lista2 list-unstyled">
              Canchas Favoritas
              <li>CANCHA1</li>
              <li>CANCHA2</li>
              <li>CANCHA3</li>
            </ul>
          </div>
          <div
            id="footer-seccion4"
            class="col-12 col-md3 d-flex aling-items-center justify-content-center"
          >
            <ul class="lista3 list-unstyled">
              Contacto
              <li>Preguntas Frecuentes</li>
              <li>Keepe@gmail.com</li>
              <li>+56 9 51050072</li>
            </ul>
          </div>
          <div id="footer-seccion5" class="col-12 ">
            <ul class="lista4 list-unstyled">
              Acceso Cientes
              <li>Mis reservas</li>
              <li>Mi perfil</li>
              <li>Mis promociones</li>
            </ul>
          </div>
        </div>
      </div>
      {/*Keepe Logo*/}
      <div id="keepelogo-footer" class="container-fluid">
        <div class="row">
          <img
            src={logoKeepe}
            class="col-12 col-md3 d-flex aling-items-center justify-content-center"
          />
        </div>
      </div>
      {/*Keepe Logo*/}
      <div
        id="keepeletras"
        class="keepe-letras col-12 col-md3 d-flex aling-items-center justify-content-center"
      >
        <h1>Keepe</h1>
      </div>
      <div id="copyright" class="container">
        <div class="row">
          <div
            id="copyright-contenido"
            class="col-12 col-md3 d-flex aling-items-center justify-content-center"
          >
            <p>© 2022. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;
