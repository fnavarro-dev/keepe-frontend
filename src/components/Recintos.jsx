import React from "react";
import "../Assets/css/styleRecintos.css";
import img1 from "../Assets/IMG/imgRecinto1.png";
import img2 from "../Assets/IMG/imgRecinto2.png";
import img3 from "../Assets/IMG/imgRecinto3.png";
import img4 from "../Assets/IMG/imgRecinto4.png";
import img5 from "../Assets/IMG/imgRecinto5.png";
import img6 from "../Assets/IMG/imgRecinto6.png";
const RecintosComponent = () => {
  return (
    <div
      id="carouselExampleControls"
      class="container-fluid carousel slide py-5 bg-carrousel"
      data-ride="carousel"
      data-interval="2000"
    >
      <div class="carousel-inner">
        <h1 class="py-4 tituloPrincipal">Recintos disponibles</h1>
        <div class="carousel-item active">
          <div class="row">
            <div class="col-12 col-lg-4 text-center">
              <img
                src={img1}
                alt="Mi imagen"
                class="img-fluid tamanio-imagen"
              />
              <h3 class="descripcionCancha py-3">Club Basquet -Providencia</h3>
            </div>
            <div class="col-12 col-lg-4 text-center">
              <img src={img2} alt="Mi imagen" class="img-fluid" />
              <h3 class="descripcionCancha py-3">Sala Danza - Maipú</h3>
            </div>
            <div class="col-12 col-lg-4 text-center">
              <img src={img3} alt="Mi imagen" class="img-fluid" />
              <h3 class="descripcionCancha py-3">Club Padel - Recoleta</h3>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-12 col-lg-4 text-center">
              <img src={img4} alt="Mi imagen" class="img-fluid" />
              <h3 class="descripcionCancha py-3">
                Club natación -San Bernardo
              </h3>
            </div>
            <div class="col-12 col-lg-4 text-center">
              <img src={img5} alt="Mi imagen" class="img-fluid" />
              <h3 class="descripcionCancha py-3">Sala de baile - Peñalolen</h3>
            </div>
            <div class="col-12 col-lg-4 text-center">
              <img src={img6} alt="Mi imagen" class="img-fluid" />
              <h3 class="descripcionCancha py-3">Club Tenis - Las Condes</h3>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default RecintosComponent;
