import React from "react";
import "../Assets/css/styleCardPersonal.css";
import beli from "../Assets/IMG/beli.png";
import alfo from "../Assets/IMG/alfo.png";
import ari from "../Assets/IMG/ari.png";
import fran from "../Assets/IMG/fran.png";
import cono from "../Assets/IMG/cono.png";
import iconoLinkedIn from "../Assets/IMG/iconoLinkedIn.png";
import { Link } from "react-router-dom";

const CardPersonalComponent = () => {
  return (
    <div class="row justify-content-center margin-bottom">
      <h1 className="text-center titulo-principal-color pt-5 ">
        ¡Estas a cargo de los mejores!
      </h1>
      <div class="col-lg-2 col-xs-4 col-medidas mb-5">
        <div class="card mx-auto my-5 bg-card border-color">
          <div class="row">
            <div className="col-8">
              <img
                src={beli}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/belén-oyarce-santibáñez/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </Link>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">Belén Oyarce</h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            Scrum Master Developer
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-5">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={alfo}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <Link target="_blank" to="https://www.linkedin.com/in/alfonsovs/">
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </Link>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Alfonso Vilches
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            Product Owner Developer
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-5">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={ari}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/ariel-sepulveda-596435238/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </Link>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Ariel Sepúlveda
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            Full Stack <br /> Developer
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-5">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={fran}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/francisco-navarro-flores/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </Link>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Francisco Navarro
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            UX UI <br /> Developer
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-5">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={cono}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/constanza-sanchez-019205181/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </Link>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Constanza Sánchez
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            UX UI <br /> Front End Developer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardPersonalComponent;
