import React from "react";
import "../Assets/css/styleMisionVision.css";
import misionVision1 from "../Assets/IMG/misionVision1.png";
import misionVision2 from "../Assets/IMG/misionVision2.png";

const MisionVisionComponent = () => {
  return (
    <div class="container-fluid py-4 mb-5">
      <h1 class="text-center mb-3 py-5">
        <span class="text-color1 text-tipo">Nuestra </span>
        <span class="text-color2 text-tipo">misión </span>
        <span class="text-color1 text-tipo">y</span>
        <span class="text-color3 text-tipo"> visión</span>
      </h1>
      <div className="container">
        <div className="row">
          <h1 class="py-5 text-color2 text-nuestra ">Nuestra Misión</h1>
          <div className="col-lg-8 col-12">
            <p className="parrafo text-justify">
              Es mejorar y agilizar las reservas de espacios deportivas y
              centros de recreación, así como también facilitar a los
              propietarios de recintos de una herramienta de publicación fácil,
              sencilla y atractiva para potenciar tu negocio
            </p>
          </div>
          <div className="col-lg-4 col-12">
            <img
              src={misionVision1}
              alt="mision vision imagen"
              className="img-fluid imagen-dimensiones"
            />
          </div>
        </div>
        <div className="row">
          <h1 class="py-5 text-color2 text-nuestra text-color3">
            Nuestra Visión
          </h1>
          <div className="col-lg-8 col-12">
            <p className="parrafo text-justify">
              Es llegar a ser una plataforma líder y referente de reservas de
              recintos, simplificando el proceso y generando soluciones a todos
              aquellos que busquen reservar o arrendar.
            </p>
          </div>
          <div className="col-lg-4 col-12">
            <img
              src={misionVision2}
              alt="mision vision imagen"
              className="img-fluid imagen-dimensiones"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionVisionComponent;
